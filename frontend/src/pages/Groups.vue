<template>
  <PageHeader>
    <Breadcrumbs :items="[{ label: __('Group management') }]" />
    <Button :label="__('New group')" variant="solid" icon-left="lucide-plus" @click="creating = true" />
  </PageHeader>
  <ErrorMessage v-if="!creating" class="mx-3 mt-3 sm:mx-5" :message="error" />
  <div v-if="loading" class="flex flex-1 items-center justify-center">
    <LoadingIndicator class="size-8" />
  </div>
  <ListView
    v-else
    class="pt-2"
    :columns="columns"
    :rows="groups"
    row-key="id"
    :options="{
      getRowRoute: (row) => ({ name: 'GroupEdit', params: { id: row.id } }),
      selectable: false,
      showTooltip: false,
      emptyState: { title: __('No groups yet'), description: __('Add one to get started.') },
    }"
  >
    <ListHeader class="mx-3 sm:mx-5" />
    <ListRows class="mx-3 sm:mx-5">
      <ListRow v-for="row in groups" :key="row.id" v-slot="{ item }" :row="row" :data-group="row.name">
        <ListRowItem :item="item" />
      </ListRow>
    </ListRows>
  </ListView>

  <Dialog v-model:open="creating" :title="__('New group')">
    <template #default>
      <form id="new-group" class="flex flex-col gap-3" @submit.prevent="create">
        <FormControl v-model="name" :label="__('Group name')" required />
        <ErrorMessage :message="error" />
      </form>
    </template>
    <template #actions>
      <div class="flex justify-end gap-2">
        <Button type="submit" form="new-group" variant="solid" :label="__('Create group')" :loading="saving" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Breadcrumbs, Button, Dialog, ErrorMessage, FormControl, LoadingIndicator, PageHeader, toast } from 'frappe-ui'
import { ListHeader, ListRow, ListRowItem, ListRows, ListView } from 'frappe-ui/experimental'
import { __ } from '@/translate'
import { useApi } from '@/api'

const { api, error } = useApi()
const groups = ref([])
const loading = ref(true)
const saving = ref(false)
const creating = ref(false)
const name = ref('')
const columns = computed(() => [{ label: __('Group name'), key: 'name', width: '1fr' }])

async function load() {
  groups.value = (await api('list_groups')) || []
  loading.value = false
}

async function create() {
  saving.value = true
  await api('create_group', { name: name.value })
  saving.value = false
  if (error.value) return
  creating.value = false
  name.value = ''
  toast.success(__('Group created.'))
  await load()
}

load()
</script>
