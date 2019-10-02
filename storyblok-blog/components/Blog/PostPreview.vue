<template>
  <nuxt-link :to="`post/${id}`" tag="a">
    <article class="post-preview">
      <div :style="{backgroundImage: `url(${thumbnail})`}" class="post-preview-thumbnail" />
      <div class="post-preview-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      default: '1',
      required: true
    },
    thumbnail: {
      type: String,
      default: 'https://via.placeholder.com/300',
      required: true
    },
    title: {
      type: String,
      default: 'Placeholder Title',
      required: true
    },
    previewText: {
      type: String,
      default: 'Placeholder Text',
      required: true
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

  .post-preview {
    border-radius: 3px;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.5);
    width: 90%;
    margin: 1rem;
    height: 20rem;
  }

  .post-preview-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
  }

  .post-preview-content{
    text-align: center;
    padding: 1rem;
  }

  @media (min-width: 50rem) {
    .post-preview{
      width: 25rem;
    }

  }
</style>
