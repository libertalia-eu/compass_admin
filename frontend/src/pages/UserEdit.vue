<template>
  <PageHeader>
    <Breadcrumbs :items="breadcrumbs" />
    <Button type="submit" form="user-form" variant="solid" :label="__('Save')" :disabled="!user" />
  </PageHeader>
  <div v-if="!user" class="flex flex-1 items-center justify-center">
    <ErrorMessage v-if="error" :message="error" />
    <LoadingIndicator v-else class="size-8" />
  </div>
  <div v-else class="mx-auto flex w-full max-w-xl flex-col gap-6 p-6 text-ink-gray-8">
    <div class="flex items-center gap-3">
      <Avatar :label="fullName" size="2xl" />
      <div class="flex flex-col gap-1">
        <h2 class="text-2xl-semibold leading-none">{{ fullName }}</h2>
        <Badge :label="user.enabled ? __('Active') : __('Deactivated')" :theme="user.enabled ? 'green' : 'gray'" variant="subtle" class="self-start" />
      </div>
    </div>
    <ErrorMessage :message="error" />
    <form id="user-form" class="flex flex-col gap-4" @submit.prevent="save">
      <FormControl :model-value="user.username" :label="__('Username')" disabled />
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormControl v-model="form.first_name" :label="__('First name')" required />
        <FormControl v-model="form.last_name" :label="__('Last name')" required />
      </div>
      <FormControl v-model="form.email" :label="__('Email')" type="email" required />
      <FormControl v-model="form.locale" :label="__('Language')" type="select" :options="languages" />
      <FormControl v-model="form.require_2fa" :label="__('Require two-factor authentication')" type="checkbox" />
    </form>
    <RoleChecklist :held="access.roles" @change="(role, value) => setRole(role, value)" />
    <div class="flex flex-wrap gap-2 border-t border-outline-gray-1 pt-4">
      <Button :label="__('Reset password')" icon-left="lucide-key-round" :disabled="!user.email" @click="resetPassword" />
      <Button :label="user.enabled ? __('Deactivate') : __('Activate')" :icon-left="user.enabled ? 'lucide-user-x' : 'lucide-user-check'" @click="toggle" />
      <Button theme="red" :label="__('Delete')" icon-left="lucide-trash-2" @click="deleting = true" />
    </div>
  </div>

  <Dialog v-model:open="deleting" :title="__('Delete user')">
    <template #default>
      <p class="text-p-base text-ink-gray-7">{{ __('Delete {0} for good?').replace('{0}', user?.username) }}</p>
    </template>
    <template #actions>
      <div class="flex justify-end gap-2">
        <Button variant="solid" theme="red" :label="__('Delete')" @click="remove" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Avatar, Badge, Breadcrumbs, Button, Dialog, ErrorMessage, FormControl, LoadingIndicator, PageHeader, toast } from 'frappe-ui'
import { __ } from '@/translate'
import { languages, useApi } from '@/api'
import RoleChecklist from '@/components/RoleChecklist.vue'

const props = defineProps({ id: String })
const router = useRouter()
const { api, error } = useApi()
const user = ref(null)
const form = reactive({ email: '', first_name: '', last_name: '', locale: 'en', require_2fa: false })
const deleting = ref(false)
const access = ref({ roles: [] })

const fullName = computed(() => `${user.value.first_name} ${user.value.last_name}`.trim() || user.value.username)
const breadcrumbs = computed(() => [
  { label: __('User management'), route: { name: 'Users' } },
  { label: user.value?.username || __('Edit') },
])

async function load() {
  user.value = await api('get_user', { user_id: props.id })
  if (user.value) Object.assign(form, { ...user.value, locale: user.value.locale || 'en' })
  access.value = (await api('get_user_roles', { user_id: props.id })) || access.value
}

async function setRole(role, granted) {
  await api('set_user_role', { user_id: props.id, client: role.client, role: role.role, granted: granted ? 1 : 0 })
  if (!error.value) toast.success(__('Saved.'))
  await load()
}

// runs a call, shows its message and reloads the data
async function run(method, args, message) {
  await api(method, { user_id: props.id, ...args })
  if (error.value) return false
  toast.success(message)
  await load()
  return true
}

const save = () => run('update_user', { ...form, require_2fa: form.require_2fa ? 1 : 0 }, __('Saved.'))
const resetPassword = () => run('send_password_reset', {}, __('A link to choose a new password was sent to {0}.').replace('{0}', user.value.email))
const toggle = () => run('set_user_enabled', { enabled: user.value.enabled ? 0 : 1 }, __('Saved.'))

async function remove() {
  await api('delete_user', { user_id: props.id })
  if (!error.value) router.push({ name: 'Users' })
  else deleting.value = false
}

load()
</script>
