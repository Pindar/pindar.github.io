<template>
  <div class="cf ph3 ph5-ns pv5">
    <header>
      <h1 class="f3 f2-m f1-l">Publications</h1>
    </header>

    <article class="f5 lh-copy measure mt0-ns">
      <h2 class="f4 f3-m f2-l">Magazines</h2>
      <ul>
        <li>
          XML Power (Efficient XML Interchange), 2010, Webstandards Magazin
        </li>
        <li>
          Schöne Funktionen (Funktionale Programmierung in Webprojekten), 2010,
          Webstandards Magazin
        </li>
        <li>
          XAML und MXML – Weboberflächen der Zukunft schon heute, 2009,
          Webstandards Magazin
        </li>
      </ul>

      <h2 class="f4 f3-m f2-l">Slides</h2>
      <a href="https://de.slideshare.net/pindar" class="link"
        >My slides on Slideshare</a
      >
    </article>
  </div>
</template>

<style scoped>
.iframe-slideshare-16x9 {
  padding-bottom: calc(56.25% + 38px);
  position: relative;
  width: 100%;
  height: 0;
}

.resp-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
}
</style>

<script>
export default {
  head() {
    return {
      title: `Publications - itnotes`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Publications - itnotes'
        }
      ]
    }
  }
}
</script>
