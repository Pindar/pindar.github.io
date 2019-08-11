<template>
  <SDArticleList :blogs="blogs" />
</template>

<script>
import SDArticleList from '~/components/SDArticleList.vue'
import postsEn from '~/contents/blogsEn.js'
export default {
  components: {
    SDArticleList
  },
  asyncData({ app }) {
    const blogs = postsEn

    async function asyncImport(blogName) {
      const wholeMD = await import(`~/contents/posts/${blogName.fileName}.md`)
      const attr = Object.assign(wholeMD.attributes, blogName)
      return attr
    }
    return Promise.all(blogs.map((blog) => asyncImport(blog))).then((res) => {
      return {
        blogs: res
      }
    })
  }
}
</script>
