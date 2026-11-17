<template>
  <div class="flex flex-col gap-2">
    <h3 class="text-lg-semibold">{{ __('Roles') }}</h3>
    <FormControl
      v-for="role in roles"
      :key="role.client + role.role"
      type="checkbox"
      :label="role.role"
      :model-value="isHeld(role)"
      @update:model-value="(value) => $emit('change', role, value)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FormControl } from 'frappe-ui'
import { __ } from '@/translate'
import { useApi } from '@/api'

// the roles an admin hands out; `held` lists the ones the user has, a change goes to the parent
const props = defineProps({ held: { type: Array, default: () => [] } })
defineEmits(['change'])

const { api } = useApi()
const roles = ref([])
const isHeld = (role) => props.held.some((h) => h.client === role.client && h.role === role.role)

api('list_roles').then((list) => (roles.value = list || []))
</script>
