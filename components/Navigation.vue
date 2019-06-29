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
      <div class="close-window" v-if="elem.id!=null">
        <p @click="onClose">Закрыть заметку</p>
      </div>
      <div class="info-text"
       v-if = "(elem.id == null)&(!show_createForm)"
       >
        <div class="addNote"
         @click="onAdd">
          <img src="~/static/plus.svg" alt="">
        </div>
        <p>
          Нажмите чтобы добавить новую заметку
        </p>
      </div>
      <div>
        <input type="text"
         class="input-title"
         v-if="show_createForm"
         v-model="elem.name">
        <input type="text"
         class="input-title text-body"
         v-if="show_createForm"
         v-model="elem.descript">
        <input type="text"
         class="input-title"
         v-if="show"
         v-model="elem.name">
        <input type="text"
         class="input-title text-body"
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
        v-if = "show||show_createForm"
        @click ="onSave(elem.id, elem.name, elem.descript, notes.notes)">Save</button>
        <button
        type="button"
        class="btn btn-danger"
        v-if = "show||show_createForm"
        @click = "(show = false)&(show_createForm = false)">Cancel</button>
      <button
       type = "button"
       class = "btn btn-warning"
       v-if = "(elem.name != null)"
       v-show = "!show"
       @click = "show = true">Edit</button>
      <button
       type = "button"
       class = "btn btn-danger"
       v-if = "(elem.name != null)"
       v-show = "!show"
       @click ="onDelete(elem.id)">Delete</button>
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
        show_createForm: false
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
      onAdd(){
        this.show_createForm = true
      },
      onClick(note) {
        if ((!this.show)&&(!this.show_createForm)){
        this.elem.name = note.name;
        this.elem.descript = note.descript;
        this.elem.id = note.id
        }
      },
      onDelete (id) {
        this.$store.dispatch('deleteNote', id)
      },
      onClose () {
        this.elem.id = null;
        this.elem.name = null;
        this.elem.descript = null;
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
