<template>
  <div class="index">
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
    <div class="area">
      <div>
        <input type="text"
         class="input-title"
         v-if="show"
         v-model="elem.name">
        <input type="text"
         class="input-body"
         v-if="show"
         v-model ="elem.descript">
         <div v-else>
            <h2>{{elem.name}}</h2>
            <p>{{elem.descript}}</p>
            
         </div>
      </div>
       <button
        type="button"
        class="btn btn-success"
        v-if = "show"
        @click ="onSave(elem.id, elem.name, elem.descript, notes.notes)">Success</button>
        <button
        type="button"
        class="btn btn-danger"
        v-if = "show"
        @click = "show = false">Cancel</button>
      <button
       type = "button"
       class = "btn btn-warning"
       v-if = "(elem.name != null)"
       v-show = "!show"
       @click = "show = true">Edit</button>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
    data () {
      return {
        elem: {
          id: null,
          name: null,
          descript: null
        },
        show: false,
      }
    },
    computed: mapState([
        "notes"
    ]),
    methods: {
      onSave(idNote, nameNote, descriptNote, notes_obj) {
        this.show = false;
        this.$store.dispatch('saveNote', {id: idNote, name: nameNote, descript: descriptNote});
        this.$store.dispatch('postNote', notes_obj)
      },
      test(notes_obj){
      },
      onClick(note) {
        if (!this.show){
        this.elem.name = note.name;
        this.elem.descript = note.descript;
        this.elem.id = note.id
        }
      }
    }
}
</script>

<style scoped lang="sass">
.navigation
    background-color: yellow
    width: 30%
    margin: 0 10px
    height: 550px;
li
    margin-top: 10px
.area
    background-color: green
    width: 70%
    margin: 0 10px
    padding: 20px
    color: white
.index
    display: flex
    justify-content: flex-start
    min-height: 500px
.input-title
  margin-bottom: 10px
button
  margin: 10px
</style>
