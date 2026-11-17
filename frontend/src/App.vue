<template>
  <FrappeUIProvider>
    <DesktopShell class="!h-screen">
      <template #sidebar>
        <Sidebar v-model:collapsed="collapsed" class="border-r border-outline-gray-1">
          <SidebarHeader :title="__('Admin')" :subtitle="account.fullname" logo="/assets/frappe/images/framework.png" :menu-items="menuItems" />
          <div class="flex flex-1 flex-col gap-1 overflow-y-auto px-2 pt-1">
            <SidebarItem :label="__('My account')" icon="lucide-user" :route="{ name: 'MyAccount' }" />
            <SidebarItem v-if="canManage" :label="__('User management')" icon="lucide-users" :route="{ name: 'Users' }" :active="$route.path.startsWith('/users')" />
          </div>
          <div class="px-2 pb-2"><SidebarCollapseToggle /></div>
        </Sidebar>
      </template>
      <RouterView />
    </DesktopShell>
  </FrappeUIProvider>
</template>

<script setup>
import { h, markRaw, ref } from 'vue'
import AppsIcon from '@/AppsIcon.vue'
import { __ } from '@/translate'
import { call, DesktopShell, FrappeUIProvider, Sidebar, SidebarCollapseToggle, SidebarHeader, SidebarItem } from 'frappe-ui'

const canManage = window.can_manage_users
const account = window.account
const apps = window.apps || []

// Same menu as the user dropdown of Frappe CRM: Apps (a submenu with the other apps the user may open), separator, Log out
const menuItems = [
  {
    group: '',
    hideLabel: true,
    options: [
      {
        label: __('Apps'),
        icon: markRaw(AppsIcon),
        submenu: apps.map((app) => ({
          label: app.title,
          onClick: () => openApp(app),
          slots: { prefix: () => h('img', { class: 'size-5 rounded-4', src: app.logo }) },
        })),
      },
    ],
  },
  { group: '', hideLabel: true, options: [{ label: __('Log out'), icon: 'lucide-log-out', onClick: logout }] },
]

// copied from the user dropdown of CRM: the window name makes a second click reuse the window; `noopener` would ignore the name
function openApp(app) {
  const target = window.open('', app.window)
  try {
    target.opener = null
  } catch (e) {
    // a reused window of another host has the opener cut already
  }
  target.location.href = app.route
}

async function logout() {
  await call('logout') // REQ-005: ends the Keycloak session and the sessions of all apps
  window.location.href = '/login'
}
const collapsed = ref(window.innerWidth < 640)
</script>
