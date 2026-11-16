<template>
  <PageHeader>
    <PageHeaderTitle :title="__('User management')" />
    <Button :label="__('New user')" variant="solid" @click="creating = true" />
  </PageHeader>
  <div class="flex flex-col gap-4 p-6">
    <ErrorMessage :message="error" />
    <p v-if="notice" class="text-p-base text-ink-gray-8">{{ notice }}</p>
    <table class="w-full text-left text-p-base">
      <thead class="text-ink-gray-6">
        <tr>
          <th class="py-2">{{ __('Username') }}</th>
          <th>{{ __('Email') }}</th>
          <th>{{ __('Status') }}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="border-t border-outline-gray-1" :data-user="user.username">
          <td class="py-2">{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td><Badge :label="user.enabled ? __('Active') : __('Deactivated')" :theme="user.enabled ? 'green' : 'gray'" /></td>
          <td class="flex justify-end gap-1 py-1">
            <Button variant="ghost" :label="user.enabled ? __('Deactivate') : __('Activate')" @click="run('set_user_enabled', { user_id: user.id, enabled: user.enabled ? 0 : 1 })" />
            <Button variant="ghost" :label="__('Send password reset link')" :disabled="!user.email" @click="sendReset(user)" />
            <Button variant="ghost" :label="__('Require two-factor authentication')" @click="run('require_user_2fa', { user_id: user.id })" />
            <Button variant="ghost" theme="red" :label="__('Delete')" @click="deleting = user" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <Dialog v-model:open="creating" :title="__('New user')">
    <template #default>
      <form class="flex flex-col gap-3" @submit.prevent="create">
        <FormControl v-model="form.username" :label="__('Username')" required />
        <FormControl v-model="form.email" :label="__('Email')" type="email" required />
        <FormControl v-model="form.first_name" :label="__('First name')" required />
        <FormControl v-model="form.last_name" :label="__('Last name')" required />
        <FormControl v-model="form.password" :label="__('Password')" type="password" autocomplete="new-password" required />
        <FormControl v-model="form.locale" :label="__('Language')" type="select" :options="languages" />
        <Button type="submit" variant="solid" :label="__('Create user')" />
      </form>
    </template>
  </Dialog>

  <Dialog v-model:open="deleteOpen" :title="__('Delete user')">
    <template #default>
      <p class="text-p-base">{{ __('Delete {0} for good?').replace('{0}', deleting?.username) }}</p>
      <Button class="mt-3" variant="solid" theme="red" :label="__('Delete')" @click="remove" />
    </template>
  </Dialog>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { __ } from '@/translate'
import { Badge, Button, Dialog, ErrorMessage, FormControl, PageHeader, PageHeaderTitle, call } from 'frappe-ui'

const users = ref([])
const error = ref('')
const notice = ref('')
const creating = ref(false)
const deleting = ref(null)
const blank = () => ({ username: '', email: '', first_name: '', last_name: '', password: '', locale: window.locale || 'en' })
const form = reactive(blank())
const languages = [{ label: 'English', value: 'en' }, { label: 'Deutsch', value: 'de' }]

// the dialog opens while a user is picked
const deleteOpen = computed({ get: () => !!deleting.value, set: (v) => !v && (deleting.value = null) })

async function api(method, args) {
  error.value = ''
  notice.value = ''
  try {
    return await call(`compass_admin.api.${method}`, args)
  } catch (e) {
    error.value = e.messages?.[0] || e.message
    return undefined
  }
}

async function load() {
  users.value = (await api('list_users')) || []
}

// the error stays on the page when a call fails
async function run(method, args) {
  await api(method, args)
  if (!error.value) await load()
}

async function create() {
  await run('create_user', { ...form })
  if (!error.value) {
    creating.value = false
    Object.assign(form, blank())
  }
}

async function sendReset(user) {
  await api('send_password_reset', { user_id: user.id })
  if (!error.value) notice.value = __('A link to choose a new password was sent to {0}.').replace('{0}', user.email)
}

async function remove() {
  await run('delete_user', { user_id: deleting.value.id })
  if (!error.value) deleting.value = null
}

load()
</script>
