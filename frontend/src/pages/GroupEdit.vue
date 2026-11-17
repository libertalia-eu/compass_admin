<template>
  <PageHeader>
    <Breadcrumbs :items="breadcrumbs" />
    <div class="flex items-center gap-2">
      <Badge v-if="changed" :label="__('Unsaved changes')" theme="orange" variant="subtle" />
      <Button type="submit" form="group-form" variant="solid" :label="__('Save')" :disabled="!changed" />
    </div>
  </PageHeader>
  <div v-if="!group" class="flex flex-1 items-center justify-center">
    <ErrorMessage v-if="error" :message="error" />
    <LoadingIndicator v-else class="size-8" />
  </div>
  <div v-else class="mx-auto flex w-full max-w-xl flex-col gap-6 p-6 text-ink-gray-8">
    <ErrorMessage :message="error" />
    <form id="group-form" class="flex flex-col gap-4" @submit.prevent="save">
      <FormControl v-model="name" :label="__('Group name')" required />
    </form>

    <RoleChecklist :held="roles" @change="setRole" />

    <div class="flex flex-col gap-2">
      <h3 class="text-lg-semibold">{{ __('Members') }}</h3>
      <p v-if="!members.length" class="text-p-base text-ink-gray-6">{{ __('No members yet') }}</p>
      <div v-for="member in members" :key="member.id" :data-member="member.username" class="flex items-center justify-between gap-2">
        <span>{{ member.username }}</span>
        <Button :label="__('Remove')" size="sm" @click="members = members.filter((m) => m.id !== member.id)" />
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
import { Badge, Breadcrumbs, Button, Dialog, ErrorMessage, FormControl, LoadingIndicator, PageHeader, toast } from 'frappe-ui'
import { __ } from '@/translate'
import { useApi } from '@/api'
import RoleChecklist from '@/components/RoleChecklist.vue'

const props = defineProps({ id: String })
const router = useRouter()
const { api, error } = useApi()
const group = ref(null)
const users = ref([])
const name = ref('')
const roles = ref([])
const members = ref([])
const newMember = ref('')
const deleting = ref(false)

const breadcrumbs = computed(() => [{ label: __('Group management'), route: { name: 'Groups' } }, { label: group.value?.name || __('Edit') }])
const candidates = computed(() => [
  { label: '', value: '' },
  ...users.value.filter((u) => !members.value.some((m) => m.id === u.id)).map((u) => ({ label: u.username, value: u.id })),
])

const ids = (list) => list.map((m) => m.id).sort()
const key = (r) => `${r.client}/${r.role}`
// nothing is stored before Save: name, roles and members are edited here and compared with the stored group
const changed = computed(
  () =>
    !!group.value &&
    (name.value !== group.value.name ||
      ids(members.value).join() !== ids(group.value.members).join() ||
      roles.value.map(key).sort().join() !== group.value.roles.map(key).sort().join()),
)

async function load() {
  group.value = await api('get_group', { group_id: props.id })
  if (!group.value) return
  name.value = group.value.name
  roles.value = [...group.value.roles]
  members.value = [...group.value.members]
}

function setRole(role, granted) {
  const others = roles.value.filter((r) => key(r) !== key(role))
  roles.value = granted ? [...others, { client: role.client, role: role.role }] : others
}

function addMember() {
  const user = users.value.find((u) => u.id === newMember.value)
  if (user) members.value = [...members.value, { id: user.id, username: user.username }]
  newMember.value = ''
}

// one call stores all edits; on an error they stay in the page
async function save() {
  await api('update_group', { group_id: props.id, name: name.value, roles: JSON.stringify(roles.value), members: JSON.stringify(ids(members.value)) })
  if (error.value) return
  toast.success(__('Saved.'))
  await load()
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
