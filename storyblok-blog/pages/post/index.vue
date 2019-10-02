<template>
  <section class="container">
    <PostPreview
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :preview-text="post.previewText"
    />
  </section>
</template>

<script>
import PostPreview from '../../components/Blog/PostPreview'

export default {
  components: {
    PostPreview
  },
  asyncData (context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    return context.app.$storyapi.get('cdn/stories', { version, starts_with: 'post/' }).then((response) => {
      return {
        posts: response.data.stories.map((story) => {
          return {
            id: story.slug,
            thumbnail: story.content.thumbnail,
            title: story.content.title,
            previewText: story.content.excerpt
          }
        })
      }
    })
  }
}
</script>

<style>
  .container {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 50rem) {
    .container {
      flex-direction: row;
    }
  }

</style>
