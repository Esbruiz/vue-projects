<template>
  <div>
    <h1>Pet!</h1>
    <p>{{ findPet }}</p>
  </div>
  </template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Pet',
  props: {
    id: String,
    species: String
  },
  computed: {
    ...mapState([
      'Cats', 'Dogs'
    ]),
    findPet () {
      if (this.species === 'dogs') {
        return this.Dogs[this.id]
      } else {
        return this.Cats[this.id]
      }
    }
  }

}
</script>

<style scoped>

</style>
