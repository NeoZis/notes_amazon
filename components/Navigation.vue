<template>
    <div class="navigation overflow-auto">
      <ul>
        <li
         v-for="note in notes.notes"
         :key="note.id"
         @click="onClick(note)">
          {{note.name}}
        </li>
      </ul>
    </div>
</template>

<script>
import {mapState} from "vuex"

export default {
    computed: mapState([
        "notes"
    ]),
    methods: {
      onClick(note) {
        this.$store.dispatch('onClick', {click: true, obj: note})
      }
}}
</script>

<style scoped lang="sass">
.navigation
  background-color: yellow
  width: 30%
  margin: 0 10px
  height: 550px;
li
  margin-top: 10px
</style>
