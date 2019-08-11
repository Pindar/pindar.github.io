<template>
  <div class="cf ph3 ph5-ns pv5">
    <header>
      <h1 class="f3 f2-m f1-l">Publications</h1>
    </header>

    <article>
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
      <iframe
        src="https://www.slideshare.net/Pindar/slideshelf"
        width="760px"
        height="570px"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        style="border:none;"
        allowfullscreen=""
        webkitallowfullscreen=""
        mozallowfullscreen=""
      ></iframe>
    </article>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Book Shelf - itnotes`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Book Shelf - itnotes'
        }
      ]
    }
  }
}
</script>
