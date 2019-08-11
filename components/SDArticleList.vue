<template>
  <section class="mw7 center">
    <SDArticleListItem v-for="blog in blogs" :key="blog.name" :blog="blog" />
  </section>
</template>

<script>
import SDArticleListItem from '~/components/SDArticleListItem.vue'

export default {
  components: {
    SDArticleListItem
  },
  props: {
    blogs: {
      type: Array,
      required: true
    }
  }
}
</script>
