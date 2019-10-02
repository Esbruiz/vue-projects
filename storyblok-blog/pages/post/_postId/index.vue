<template>
  <section id="post" v-editable="blok">
    <h1 class="post-title">
      {{ title }}
    </h1>
    <div class="post-image" :style="{backgroundImage: `url(${postImage})`}" />
    <p class="post-content">
      {{ content }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'Index',
  asyncData (context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    return context.app.$storyapi.get(`cdn/stories/post/${context.params.postId}`, { version }).then((response) => {
      return {
        blok: response.data.story.content,
        id: response.data.story.slug,
        content: response.data.story.content.content,
        title: response.data.story.content.title,
        postImage: response.data.story.content.postImage
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
          this.postImage = event.story.content.postImage
        }
      } else {
        window.location.reload()
      }
    })
  }
}
</script>

<style scoped>
  #post{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .post-title{

  }
  .post-image{
    width: 50vw;
    height: 30vw;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .post-content{
    width: 70%;
    white-space: pre-line;
  }
</style>
