<template>
  <PageHeader>
    <Breadcrumbs :items="breadcrumbs" />
    <Button type="submit" form="group-form" variant="solid" :label="__('Rename')" :disabled="!group" />
  </PageHeader>
  <div v-if="!group" class="flex flex-1 items-center justify-center">
    <ErrorMessage v-if="error" :message="error" />
    <LoadingIndicator v-else class="size-8" />
  </div>
  <div v-else class="mx-auto flex w-full max-w-xl flex-col gap-6 p-6 text-ink-gray-8">
    <ErrorMessage :message="error" />
    <form id="group-form" class="flex flex-col gap-4" @submit.prevent="rename">
      <FormControl v-model="name" :label="__('Group name')" required />
    </form>

    <RoleChecklist :held="group.roles" @change="(role, value) => run('set_group_role', { client: role.client, role: role.role, granted: value ? 1 : 0 })" />

    <div class="flex flex-col gap-2">
      <h3 class="text-lg-semibold">{{ __('Members') }}</h3>
      <p v-if="!group.members.length" class="text-p-base text-ink-gray-6">{{ __('No members yet') }}</p>
      <div v-for="member in group.members" :key="member.id" :data-member="member.username" class="flex items-center justify-between gap-2">
        <span>{{ member.username }}</span>
        <Button :label="__('Remove')" size="sm" @click="run('set_group_member', { user_id: member.id, member: 0 })" />
      </div>
      <form class="flex items-end gap-2 pt-2" @submit.prevent="addMember">
        <FormControl v-model="newMember" class="flex-1" type="select" :label="__('Add member')" :options="candidates" />
        <Button type="submit" :label="__('Add member')" :disabled="!newMember" />
      </form>
    </div>

    <div class="flex flex-wrap gap-2 border-t border-outline-gray-1 pt-4">
      <Button theme="red" :label="__('Delete group')" icon-left="lucide-trash-2" @click="deleting = true" />
    </div>
  </div>

  <Dialog v-model:open="deleting" :title="__('Delete group')">
    <template #default>
      <p class="text-p-base text-ink-gray-7">{{ __('Delete group {0} for good?').replace('{0}', group?.name) }}</p>
    </template>
    <template #actions>
      <div class="flex justify-end gap-2">
        <Button variant="solid" theme="red" :label="__('Delete group')" @click="remove" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Breadcrumbs, Button, Dialog, ErrorMessage, FormControl, LoadingIndicator, PageHeader, toast } from 'frappe-ui'
import { __ } from '@/translate'
import { useApi } from '@/api'
import RoleChecklist from '@/components/RoleChecklist.vue'

const props = defineProps({ id: String })
const router = useRouter()
const { api, error } = useApi()
const group = ref(null)
const users = ref([])
const name = ref('')
const newMember = ref('')
const deleting = ref(false)

const breadcrumbs = computed(() => [{ label: __('Group management'), route: { name: 'Groups' } }, { label: group.value?.name || __('Edit') }])
const candidates = computed(() => [
  { label: '', value: '' },
  ...users.value.filter((u) => !group.value.members.some((m) => m.id === u.id)).map((u) => ({ label: u.username, value: u.id })),
])

async function load() {
  group.value = await api('get_group', { group_id: props.id })
  if (group.value) name.value = group.value.name
}

// runs a call on this group, shows its message and reloads the data
async function run(method, args, message = __('Saved.')) {
  await api(method, { group_id: props.id, ...args })
  if (!error.value) toast.success(message)
  await load()
}

const rename = () => run('rename_group', { name: name.value })
const addMember = async () => {
  await run('set_group_member', { user_id: newMember.value, member: 1 })
  newMember.value = ''
}

async function remove() {
  await api('delete_group', { group_id: props.id })
  if (!error.value) router.push({ name: 'Groups' })
  else deleting.value = false
}

async function start() {
  users.value = (await api('list_users')) || []
  await load()
}
start()
</script>
