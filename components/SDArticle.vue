<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
        {{ blog.attributes.title }}
      </h1>
      <time class="f6 ttu tracked gray">{{ date }}</time>
    </header>
    <div class="fn fl-ns w-50-ns">
      <div class="f5 lh-copy measure mt0-ns">
        <DynamicMarkdown
          :render-func="blog.vue.render"
          :static-render-funcs="blog.vue.staticRenderFns"
          :extra-component="blog.attributes.extraComponent"
        />
      </div>
    </div>
  </article>
</template>

<script>
import DynamicMarkdown from '~/components/DynamicMarkdown.vue'

export default {
  components: {
    DynamicMarkdown
  },
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  computed: {
    date() {
      return new Date(this.blog.attributes.date).toLocaleDateString()
    }
  }
}
</script>
