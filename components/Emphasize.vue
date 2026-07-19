<template>
  <span class="emphasize">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Emphasize'
}
</script>

<style scoped>
  .emphasize {
  @apply text-accent;
}
</style>
