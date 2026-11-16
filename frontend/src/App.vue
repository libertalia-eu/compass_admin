<template>
  <DesktopShell>
    <template #sidebar>
      <Sidebar>
        <SidebarHeader :title="__('Admin')" subtitle="COMPASS" />
        <SidebarItem :label="__('My account')" :route="{ name: 'MyAccount' }">
          <template #prefix><LucideUser class="size-4" /></template>
        </SidebarItem>
        <SidebarItem v-if="canManage" :label="__('User management')" :route="{ name: 'Users' }" :active="$route.path.startsWith('/users')">
          <template #prefix><LucideUsers class="size-4" /></template>
        </SidebarItem>
      </Sidebar>
    </template>
    <RouterView />
  </DesktopShell>
</template>

<script setup>
import { DesktopShell, Sidebar, SidebarHeader, SidebarItem } from 'frappe-ui'

const canManage = window.can_manage_users
</script>
