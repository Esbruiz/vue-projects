<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" label="Pet Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Breed:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.breed"
          required
          placeholder="Enter Breed"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.species"
          :options="species"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Gender:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.gender"
          :options="gender"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.age"
          type="number"
          required
          placeholder="Enter Age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.color"
          required
          placeholder="Enter Color"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Weight:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.weight"
        required
        placeholder="Enter Weight"
      ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Location:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.location"
        required
        placeholder="Enter Location"
      ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Notes:" label-for="input-2">
        <b-form-textarea
          id="textarea"
          v-model="form.notes"
          placeholder="Enter Pet Notes..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>



<script>
import { mapActions } from 'vuex'
export default {
  name: 'PetForm',
  data () {
    return {
      form: {
        name: '',
        breed: '',
        species: '',
        gender: '',
        age: null,
        color: '',
        weight: null,
        location: '',
        notes: ''
      },
      species: [{ text: 'Select One', value: null }, 'Dogs', 'Cats'],
      gender: [{ text: 'Select One', value: null }, { text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
      show: true
    }
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    onSubmit (evt) {
      evt.preventDefault()
      this.addPet(this.form)
      this.onReset()
    },
    onReset (evt) {
      if (evt) { evt.preventDefault() }
      // Reset our form values
      this.form = {
        name: '',
        breed: '',
        species: '',
        gender: '',
        age: null,
        color: '',
        weight: null,
        location: '',
        notes: ''
      }
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
