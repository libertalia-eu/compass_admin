<template>
  <PageHeader>
    <Breadcrumbs :items="[{ label: __('User management') }]" />
    <Button :label="__('New user')" variant="solid" icon-left="lucide-plus" @click="creating = true" />
  </PageHeader>
  <ErrorMessage v-if="!creating" class="mx-3 mt-3 sm:mx-5" :message="error" />
  <div v-if="loading" class="flex flex-1 items-center justify-center">
    <LoadingIndicator class="size-8" />
  </div>
  <ListView
    v-else
    class="pt-2"
    :columns="columns"
    :rows="rows"
    row-key="id"
    :options="{
      getRowRoute: (row) => ({ name: 'UserEdit', params: { id: row.id } }),
      selectable: false,
      showTooltip: false,
      emptyState: { title: __('No users yet'), description: __('Add one to get started.') },
    }"
  >
    <ListHeader class="mx-3 sm:mx-5" />
    <ListRows class="mx-3 sm:mx-5">
      <ListRow v-for="row in rows" :key="row.id" v-slot="{ column, item }" :row="row" :data-user="row.username">
        <ListRowItem :item="item">
          <template #prefix>
            <Avatar v-if="column.key === 'username'" :label="row.full_name || row.username" size="sm" />
          </template>
          <Badge v-if="column.key === 'status'" :label="item" :theme="row.enabled ? 'green' : 'gray'" variant="subtle" />
        </ListRowItem>
      </ListRow>
    </ListRows>
  </ListView>

  <Dialog v-model:open="creating" :title="__('New user')">
    <template #default>
      <form id="new-user" class="flex flex-col gap-3" @submit.prevent="create">
        <FormControl v-model="form.username" :label="__('Username')" required />
        <FormControl v-model="form.email" :label="__('Email')" type="email" required />
        <FormControl v-model="form.first_name" :label="__('First name')" required />
        <FormControl v-model="form.last_name" :label="__('Last name')" required />
        <FormControl v-model="form.password" :label="__('Password')" type="password" autocomplete="new-password" required />
        <FormControl v-model="form.locale" :label="__('Language')" type="select" :options="languages" />
        <ErrorMessage :message="error" />
      </form>
    </template>
    <template #actions>
      <div class="flex justify-end gap-2">
        <Button type="submit" form="new-user" variant="solid" :label="__('Create user')" :loading="saving" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { Avatar, Badge, Breadcrumbs, Button, Dialog, ErrorMessage, FormControl, LoadingIndicator, PageHeader, toast } from 'frappe-ui'
import { ListHeader, ListRow, ListRowItem, ListRows, ListView } from 'frappe-ui/experimental'
import { __ } from '@/translate'
import { languages, useApi } from '@/api'

const { api, error } = useApi()
const users = ref([])
const loading = ref(true)
const saving = ref(false)
const creating = ref(false)
const blank = () => ({ username: '', email: '', first_name: '', last_name: '', password: '', locale: window.locale || 'en' })
const form = reactive(blank())

const columns = computed(() => [
  { label: __('Username'), key: 'username', width: '12rem' },
  { label: __('Name'), key: 'full_name', width: '14rem' },
  { label: __('Email'), key: 'email', width: '1fr' },
  { label: __('Status'), key: 'status', width: '8rem' },
])
const rows = computed(() =>
  users.value.map((u) => ({
    ...u,
    full_name: `${u.first_name} ${u.last_name}`.trim(),
    status: u.enabled ? __('Active') : __('Deactivated'),
  })),
)

async function load() {
  users.value = (await api('list_users')) || []
  loading.value = false
}

async function create() {
  saving.value = true
  await api('create_user', { ...form })
  saving.value = false
  if (error.value) return
  creating.value = false
  Object.assign(form, blank())
  toast.success(__('User created.'))
  await load()
}

load()
</script>
