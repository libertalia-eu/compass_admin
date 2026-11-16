<template>
  <PageHeader><Breadcrumbs :items="[{ label: __('My account') }]" /></PageHeader>
  <div class="mx-auto flex w-full max-w-xl flex-col gap-6 p-6 text-ink-gray-8">
    <div class="flex items-center gap-3">
      <Avatar :label="account.fullname" size="2xl" />
      <div class="flex flex-col">
        <span class="text-lg-medium">{{ account.fullname }}</span>
        <span class="text-p-base text-ink-gray-6">{{ account.email }}</span>
      </div>
    </div>
    <ul class="flex flex-col divide-y divide-outline-gray-1">
      <li v-for="link in account.links" :key="link.key" class="flex items-center justify-between py-2">
        <span class="text-p-base">{{ __(link.label) }}</span>
        <Button :label="__('Open')" :data-link="link.key" icon-right="lucide-arrow-up-right" @click="open(link.url)" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Avatar, Breadcrumbs, Button, PageHeader } from 'frappe-ui'

const account = window.account
const open = (url) => (window.location.href = url)
</script>
