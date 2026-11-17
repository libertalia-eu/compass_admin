<template>
  <FrappeUIProvider>
    <DesktopShell class="!h-screen">
      <template #sidebar>
        <Sidebar v-model:collapsed="collapsed" class="border-r border-outline-gray-1">
          <SidebarHeader :title="__('Admin')" :subtitle="account.fullname" logo="/assets/frappe/images/framework.png" :menu-items="menuItems" />
          <div class="flex flex-1 flex-col gap-1 overflow-y-auto px-2 pt-1">
            <SidebarItem :label="__('My account')" icon="lucide-user" :route="{ name: 'MyAccount' }" />
            <SidebarItem v-if="canManage" :label="__('User management')" icon="lucide-users" :route="{ name: 'Users' }" :active="$route.path.startsWith('/users')" />
            <SidebarItem v-if="canManage" :label="__('Group management')" icon="lucide-users-round" :route="{ name: 'Groups' }" :active="$route.path.startsWith('/groups')" />
          </div>
          <div class="px-2 pb-2"><SidebarCollapseToggle /></div>
        </Sidebar>
      </template>
      <RouterView />
    </DesktopShell>
  </FrappeUIProvider>
</template>

<script setup>
import { ref } from 'vue'
import { call, DesktopShell, FrappeUIProvider, Sidebar, SidebarCollapseToggle, SidebarHeader, SidebarItem } from 'frappe-ui'

const canManage = window.can_manage_users
const account = window.account
const apps = window.apps || []

// the apps the user may open (the apps screen of Frappe), then Log out like the other Frappe UI apps
const menuItems = [
  { group: __('Switch app'), options: apps.map((app) => ({ label: app.title, onClick: () => window.open(app.route, app.window) })) },
  { group: '', hideLabel: true, options: [{ label: __('Log out'), icon: 'lucide-log-out', onClick: logout }] },
]

async function logout() {
  await call('logout') // REQ-005: ends the Keycloak session and the sessions of all apps
  window.location.href = '/login'
}
const collapsed = ref(window.innerWidth < 640)
</script>
