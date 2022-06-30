<script setup lang="ts">
import { useSystemStore } from '@/stores/counter'

const role = sessionStorage.getItem('role')
const store = useSystemStore()
</script>

<template>
  <div>
    11homeView
    {{ role }}
    ||{{ store.students[0].password }}
  </div>
</template>
