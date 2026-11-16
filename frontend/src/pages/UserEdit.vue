<template>
  <PageHeader>
    <PageHeaderTitle :title="user ? user.username : __('Edit')" />
    <Button :label="__('Back')" variant="ghost" @click="router.push({ name: 'Users' })" />
  </PageHeader>
  <div v-if="user" class="mx-auto flex w-full max-w-xl flex-col gap-6 p-6">
    <ErrorMessage :message="error" />
    <p v-if="notice" class="text-p-base text-ink-gray-8">{{ notice }}</p>
    <form class="flex flex-col gap-3" @submit.prevent="save">
      <FormControl :model-value="user.username" :label="__('Username')" disabled />
      <FormControl v-model="form.first_name" :label="__('First name')" required />
      <FormControl v-model="form.last_name" :label="__('Last name')" required />
      <FormControl v-model="form.email" :label="__('Email')" type="email" required />
      <FormControl v-model="form.locale" :label="__('Language')" type="select" :options="languages" />
      <FormControl v-model="form.require_2fa" :label="__('Require two-factor authentication')" type="checkbox" />
      <Button type="submit" variant="solid" :label="__('Save')" />
    </form>
    <div class="flex flex-wrap gap-2 border-t border-outline-gray-1 pt-4">
      <Button variant="outline" :label="__('Reset password')" :disabled="!user.email" @click="resetPassword" />
      <Button variant="outline" :label="user.enabled ? __('Deactivate') : __('Activate')" @click="toggle" />
      <Button variant="outline" theme="red" :label="__('Delete')" @click="deleting = true" />
    </div>
  </div>

  <Dialog v-model:open="deleting" :title="__('Delete user')">
    <template #default>
      <p class="text-p-base">{{ __('Delete {0} for good?').replace('{0}', user?.username) }}</p>
      <Button class="mt-3" variant="solid" theme="red" :label="__('Delete')" @click="remove" />
    </template>
  </Dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Button, Dialog, ErrorMessage, FormControl, PageHeader, PageHeaderTitle } from 'frappe-ui'
import { __ } from '@/translate'
import { languages, useApi } from '@/api'

const props = defineProps({ id: String })
const router = useRouter()
const { api, error } = useApi()
const user = ref(null)
const form = reactive({ email: '', first_name: '', last_name: '', locale: 'en', require_2fa: false })
const notice = ref('')
const deleting = ref(false)

async function load() {
  user.value = await api('get_user', { user_id: props.id })
  if (user.value) Object.assign(form, { ...user.value, locale: user.value.locale || 'en' })
}

// runs a call, shows its message and reloads the data
async function run(method, args, message) {
  notice.value = ''
  await api(method, { user_id: props.id, ...args })
  if (error.value) return false
  notice.value = message
  await load()
  return true
}

const save = () => run('update_user', { ...form, require_2fa: form.require_2fa ? 1 : 0 }, __('Saved.'))
const resetPassword = () => run('send_password_reset', {}, __('A link to choose a new password was sent to {0}.').replace('{0}', user.value.email))
const toggle = () => run('set_user_enabled', { enabled: user.value.enabled ? 0 : 1 }, __('Saved.'))

async function remove() {
  notice.value = ''
  await api('delete_user', { user_id: props.id })
  if (!error.value) router.push({ name: 'Users' })
  else deleting.value = false
}

load()
</script>
