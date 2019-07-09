<template>
 <div class="area">
      <div class="close-window" v-if="show">
        <p @click="onClose">Закрыть заметку</p>
      </div>
      <div class="info-text"
       v-if = "(!show)&&(!show_createForm)&&(!show_editForm)"
       >
        <div class="addNote"
         @click="onAdd">
          <img src="~/static/plus.svg" alt="Add note">
        </div>
        <p>
          Нажмите чтобы добавить новую заметку
        </p>
      </div>
      <div>
        <input type="text"
         class="input-title"
         v-if="show_createForm"
         v-model="note.name">
        <input type="text"
         class="input-title text-body"
         v-if="show_createForm"
         v-model="note.descript">
        <input type="text"
         class="input-title"
         v-if="show_editForm"
         v-model="note.name">
        <input type="text"
         class="input-title text-body"
         v-if="show_editForm"
         v-model ="note.descript">
         <div v-if="show">
            <h2>{{elem.name}}</h2>
            <p>{{elem.descript}}</p>
         </div>
      </div>
       <button
        type="button"
        class="btn btn-success"
        v-if = "show_editForm||show_createForm"
        @click ="onSave(note, notes.notes)">Save</button>
        <button
        type="button"
        class="btn btn-danger"
        v-if = "show_editForm"
        @click = "showChange({show: true, show_edit: false}, true)">Cancel</button>
        <button
        type="button"
        class="btn btn-danger"
        v-if = "show_createForm"
        @click = "showChange({show: false, show_create: false}, true)">Cancel</button>
      <button
       type = "button"
       class = "btn btn-warning"
       v-if = "show"
       @click = "showChange({show: false, show_edit: true}), note = {...elem}">Edit</button>
      <button
       type = "button"
       class = "btn btn-danger"
       v-if = "show"
       @click ="onDelete(elem.id)">Delete</button>
    </div>
</template>

<script>
import {mapState} from "vuex"

export default {
    data() {
        return {
            note: {
                id: null,
                name: null,
                descript: null
            }
        }
    },
    computed: mapState([
        "notes", "show", "show_createForm", "show_editForm", "elem"
    ]),
    methods: {
      onSave(note, notes_obj) {
        this.$store.dispatch('saveNote', note);
        this.$store.dispatch('postNote', notes_obj)
      },
      onAdd(){
        this.$store.dispatch('showChange', {show_create: true})
      },
      onDelete (id) {
        this.$store.dispatch('deleteNote', id)
      },
      onClose () {
        this.$store.dispatch('showChange', {show: false});
        this.note = {id: null, name: null, descript: null}
      },
      showChange(changes, cancel) {
        this.$store.dispatch('showChange', changes);
        if (cancel == true) {
            this.note = {id: null, name: null, descript: null}
      }
    }
}}
</script>

<style scoped lang="sass">
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
.input-title
  width: 80%
  height: 50px
  margin-bottom: 20px
  font-size: 20px
button
  margin: 10px
.info-text
  min-height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
.info-text p 
  font-size: 40px
  text-align: center
  width: 400px
.addNote
  width: 100px
  height: 100px
.close-window
  text-align: right
</style>
