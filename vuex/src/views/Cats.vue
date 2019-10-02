<template>
  <div>
    <h1>Cats for adoption</h1>
    <b-table  striped hover :items="Cats" :fields="fields" ref="selectableTable"
              selectable
              @row-selected="onRowSelected"
              :select-mode="selectMode"
              selected-variant="active">

      <template v-slot:cell(name)="data">
        <router-link v-if="!data.rowSelected" :to="`/pets/cats/${data.index}`">{{data.value}}</router-link>

        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
          v-if="show && data.rowSelected"
        ></b-form-input>
      </template>

      <template v-slot:cell(breed)="data">
        <p v-if="!data.rowSelected">{{data.value}}</p>
        <b-form-input
          id="input-2"
          v-model="form.breed"
          required
          placeholder="Enter name"
          v-if="show && data.rowSelected"
        ></b-form-input>
      </template>

      <template v-slot:cell(species)="data">
        <p v-if="!data.rowSelected">{{data.value}}</p>
        <b-form-select
          id="input-3"
          v-model="form.species"
          :options="species"
          v-if="show && data.rowSelected"
          required
        ></b-form-select>
      </template>

      <template v-slot:cell(gender)="data">
        <p v-if="!data.rowSelected">{{data.value}}</p>
        <b-form-select
          id="input-3"
          v-model="form.gender"
          :options="gender"
          v-if="show && data.rowSelected"
          required
        ></b-form-select>
      </template>

      <template v-slot:cell(age)="data">
        <p v-if="!data.rowSelected">{{data.value}}</p>
        <b-form-input
          id="input-2"
          v-model="form.age"
          type="number"
          required
          placeholder="Enter Age"
          v-if="show && data.rowSelected"
        ></b-form-input>
      </template>

      <template v-slot:cell(color)="data">
        <p v-if="!data.rowSelected">{{data.value}}</p>
        <b-form-input
          id="input-2"
          v-model="form.color"
          required
          placeholder="Enter Color"
          v-if="show && data.rowSelected"
        ></b-form-input>
      </template>

      <template v-slot:cell(weight)="data">
        <p v-if="!data.rowSelected">{{data.value}}</p>
        <b-form-input
          id="input-2"
          v-model="form.weight"
          required
          type="number"
          placeholder="Enter Weight"
          v-if="show && data.rowSelected"
        ></b-form-input>
      </template>

      <template v-slot:cell(location)="data">
        <p v-if="!data.rowSelected">{{data.value}}</p>
        <b-form-input
          id="input-2"
          v-model="form.location"
          required
          placeholder="Enter Location"
          v-if="show && data.rowSelected"
        ></b-form-input>
      </template>

      <template v-slot:cell(notes)="data">
        <p v-if="!data.rowSelected">{{data.value}}</p>
        <b-form-textarea
        id="textarea"
        v-model="form.notes"
        placeholder="Enter Pet Notes..."
        v-if="show && data.rowSelected"
        rows="3"
        max-rows="6"
        ></b-form-textarea>
      </template>

      <template v-slot:cell(actions)="row">
        <b-button v-if="!row.rowSelected"  @click="onEdit(row.index, row.item)" size="sm" class="mr-1">
          Edit
        </b-button>

        <b-button v-if="show && row.rowSelected"  @click="onUpdate(row.index)" size="sm" class="mr-1">
          Update
        </b-button>

        <b-button @click="onDelete({index: row.index, species: `Cats`})" size="sm">
          Delete
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Cats',
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
      fields: ['name', 'breed', 'species', 'gender', 'age', 'color', 'weight', 'location', 'notes', 'actions'],
      show: false,
      selected: [],
      selectMode: 'single'
    }
  },
  computed: {
    ...mapState([
      'Cats'
    ])
  },
  methods: {
    ...mapActions([
      'deletePet',
      'editPet'
    ]),
    onDelete (payload) {
      this.deletePet(payload)
    },
    onEdit (index, pet) {
      this.$refs.selectableTable.selectRow(index)
      this.form = pet
      this.show = true
    },
    onUpdate (index) {
      this.$refs.selectableTable.unselectRow(index)
      this.editPet({ index: index, pet: this.form })
      this.show = false
    },
    onRowSelected (items) {
      this.form = items[0]
      this.show = true
    }
  }
}
</script>

<style scoped>

</style>
