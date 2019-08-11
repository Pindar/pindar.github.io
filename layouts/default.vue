<template>
  <div class="w-100 sans-serif bg-white">
    <SDNavigation />
    <nuxt />
  </div>
</template>

<script>
import SDNavigation from '~/components/SDNavigation.vue'

export default {
  components: {
    SDNavigation
  }
}
</script>
