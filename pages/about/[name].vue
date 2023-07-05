<template>
    <div>This is dynamic route {{ route.params.name }}</div>
</template>

<script setup>
const route =  useRoute()
</script>