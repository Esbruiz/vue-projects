<template>
  <section id="about-page" v-editable="blok">
    <div class="about-content">
      <h1>{{ title }}</h1>
      <p class="about--content">
        {{ content }}
      </p>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Index',
  asyncData (context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    return context.app.$storyapi.get('cdn/stories/about', { version }).then((response) => {
      return {
        blok: response.data.story.content,
        id: response.data.story.content._id,
        content: response.data.story.content.content,
        title: response.data.story.content.title
      }
    })
  },
  mounted () {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.id) {
          this.blok = event.story.content
          this.content = event.story.content.content
          this.title = event.story.content.title
        }
      } else {
        window.location.reload()
      }
    })
  }
}
</script>

<style scoped>
.about-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
}
  .about--content{
    width: 70%;
    white-space: pre-line;
  }
</style>
