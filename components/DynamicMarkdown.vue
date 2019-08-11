<script>
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import bash from 'highlight.js/lib/languages/bash'
import ini from 'highlight.js/lib/languages/ini'
import InlineCode from './InlineCode.vue'
import 'highlight.js/styles/a11y-light.css'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('bash', ini)
export default {
  components: {
    InlineCode
  },
  props: ['staticRenderFuncs', 'extraComponent', 'renderFunc'],
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    initHighlightJs() {
      const targets = document.querySelectorAll('code')
      targets.forEach((target) => {
        hljs.highlightBlock(target)
      })
    },
    extraComponentLoader() {
      if (!this.extraComponent) {
        return null
      }
      return () => import(`~/components/${this.extraComponent}.vue`)
    }
  },
  mounted() {
    return this.initHighlightJs
  },
  created() {
    // eslint-disable-next-line no-new-func
    this.templateRender = new Function(this.renderFunc)()
    // eslint-disable-next-line no-new-func
    this.$options.staticRenderFns = new Function(this.staticRenderFuncs)()
  },
  render(createElement) {
    return this.templateRender
      ? this.templateRender()
      : createElement('div', 'Rendering')
  }
}
</script>
