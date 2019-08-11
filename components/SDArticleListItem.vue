<template>
  <article class="pv4 bt bb b--black-10 ph3 ph0-l">
    <nuxt-link :to="blog.url" class="link black dim">
      <div class="flex flex-column flex-row-ns">
        <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
          <div class="f3 mt0 lh-title">{{ blog.title }}</div>
          <p class="f5 f4-l lh-copy"></p>
        </div>
        <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
          <img :src="imagePath" class="db" />
        </div>
      </div>
      <time class="f6 db gray">{{ date }}</time>
    </nuxt-link>
  </article>
</template>

<style scoped>
.bw {
  filter: grayscale(100%);
}
</style>

<script>
const images = require.context('~/assets/', false, /(\.jpg)|(\.png)$/)

export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  computed: {
    imagePath() {
      const imagePath = this.blog.image
        ? `./${this.blog.image}`
        : './default.jpg'
      return images(imagePath)
    },
    date() {
      return new Date(this.blog.date).toLocaleDateString()
    }
  }
}
</script>
