<template>
  <div class="home">
    <h1>Adopt a new best friend</h1>
    <button @click="togglePetForm" class="btn btn-primary">Add a newPet</button>
    <PetForm v-if="showPetForm" />
  </div>
</template>

<script>

import PetForm from './PetForm'

export default {
  name: 'home',
  data () {
    return {
      showPetForm: false
    }
  },
  methods: {
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    }
  },
  components: {
    PetForm
  }
}
</script>

<style scoped lang="scss">
  .btn-primary {
    margin-bottom: 30px;
  }
</style>
