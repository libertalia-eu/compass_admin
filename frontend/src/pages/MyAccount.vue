<template>
  <PageHeader><PageHeaderTitle :title="__('My account')" /></PageHeader>
  <div class="mx-auto flex w-full max-w-xl flex-col gap-4 p-6">
    <p class="text-p-base text-ink-gray-7">{{ account.fullname }} · {{ account.email }}</p>
    <div class="flex flex-col gap-2">
      <Button
        v-for="link in account.links"
        :key="link.key"
        :label="__(link.label)"
        :data-link="link.key"
        variant="outline"
        class="justify-start"
        @click="open(link.url)"
      />
    </div>
  </div>
</template>

<script setup>
import { Button, PageHeader, PageHeaderTitle } from 'frappe-ui'

const account = window.account
const open = (url) => (window.location.href = url)
</script>
