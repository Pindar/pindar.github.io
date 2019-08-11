<template>
  <div class="w-100 sans-serif bg-white">
    <SDNavigation />
    <SDArticle />
    <nuxt />
  </div>
</template>

<script>
import SDNavigation from '~/components/SDNavigation.vue'
import SDArticle from '~/components/SDArticle.vue'

export default {
  components: {
    SDNavigation,
    SDArticle
  }
}
</script>
