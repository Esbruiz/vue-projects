<template>
  <div class="main-container">
    <TheNavbar />
    <nuxt />
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar'

export default {
  components: {
    TheNavbar
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.main-container{
  margin-top: 4.5rem;
}

  body {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
</style>
