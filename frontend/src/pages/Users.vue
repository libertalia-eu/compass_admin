<template>
  <PageHeader>
    <PageHeaderTitle :title="__('User management')" />
    <Button :label="__('New user')" variant="solid" @click="creating = true" />
  </PageHeader>
  <div class="flex flex-col gap-4 p-6">
    <ErrorMessage :message="error" />
    <table class="w-full text-left text-p-base">
      <thead class="text-ink-gray-6">
        <tr>
          <th class="py-2">{{ __('Username') }}</th>
          <th>{{ __('First name') }}</th>
          <th>{{ __('Last name') }}</th>
          <th>{{ __('Email') }}</th>
          <th>{{ __('Status') }}</th>
          <th class="text-right">{{ __('Actions') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="border-t border-outline-gray-1" :data-user="user.username">
          <td class="py-2">{{ user.username }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td><Badge :label="user.enabled ? __('Active') : __('Deactivated')" :theme="user.enabled ? 'green' : 'gray'" /></td>
          <td class="text-right">
            <Button variant="ghost" :label="__('Edit')" @click="$router.push({ name: 'UserEdit', params: { id: user.id } })" />
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
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Badge, Button, Dialog, ErrorMessage, FormControl, PageHeader, PageHeaderTitle } from 'frappe-ui'
import { languages, useApi } from '@/api'

const { api, error } = useApi()
const users = ref([])
const creating = ref(false)
const blank = () => ({ username: '', email: '', first_name: '', last_name: '', password: '', locale: window.locale || 'en' })
const form = reactive(blank())

async function load() {
  users.value = (await api('list_users')) || []
}

async function create() {
  await api('create_user', { ...form })
  if (error.value) return
  creating.value = false
  Object.assign(form, blank())
  await load()
}

load()
</script>
