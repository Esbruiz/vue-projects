<template>
  <div>
    <h1>Dogs for adoption</h1>
    <b-table striped hover :items="Dogs">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/dogs/${data.index}`">{{data.value}}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Dogs',
  computed: {
    ...mapState([
      'Dogs'
    ])
  }
}
</script>

<style scoped>

</style>
