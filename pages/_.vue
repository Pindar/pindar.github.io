<template>
  <div>
    <SDArticle :blog="blog"></SDArticle>
    <div id="disqus_thread" class="cf ph3 ph5-ns pv5"></div>
    <vue-disqus shortname="itnotesde"></vue-disqus>
  </div>
</template>

<script>
import SDArticle from '~/components/SDArticle.vue'

export default {
  components: {
    SDArticle
  },
  async asyncData({ params }) {
    const pathMatch =
      params.pathMatch.substr(params.pathMatch.length - 1) === '/'
        ? params.pathMatch.substr(0, params.pathMatch.length - 1)
        : params.pathMatch
    const pathArr = pathMatch.split('/')
    const fileName = pathArr.slice(Math.max(pathArr.length - 4, 0)).join('-')
    const fileContent = await import(`~/contents/posts/${fileName}.md`)
    return {
      path: pathMatch,
      blog: fileContent.default
    }
  },
  head() {
    return {
      title: `${this.blog.attributes.title} - itnotes`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.blog.attributes.title} - itnotes`
        }
      ]
    }
  }
}
</script>
