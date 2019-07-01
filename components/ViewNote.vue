<template>
  <div class="area">
    <div class="close-window" v-if="elem.id!=null">
      <p @click="onClose">Закрыть заметку</p>
    </div>
    <div class="info-text" v-if="(elem.id == null)&(!show_createForm)" @click="onAdd">
      <div class="addNote">
        <img src="~/static/plus.svg" alt="create buttom">
      </div>
      <p>
        Нажмите чтобы добавить новую заметку
      </p>
    </div>
    <div>
      <input type="text" class="input-title"
       v-if="show_createForm"
       v-model="newNote.name">
      <input type="text" class="input-title text-body"
       v-if="show_createForm"
       v-model="newNote.descript">
      <input type="text" class="input-title"
       v-if="show"
       v-model="note.name">
      <input type="text" class="input-title text-body"
       v-if="show"
       v-model="note.descript">
      <div v-else>
        <h2>{{elem.name}}</h2>
        <p>{{elem.descript}}</p>
      </div>
    </div>
    <button type="button" class="btn btn-success"
     v-if="show||show_createForm"
     @click="onSave(elem.id, elem.name, elem.descript, notes.notes)">Save</button>
    <button type="button" class="btn btn-danger" v-if="show||show_createForm"
      @click="(show = false)&(show_createForm = false)">Cancel</button>
    <button type="button" class="btn btn-warning" v-if="(elem.name != null)" v-show="!show"
      @click="show = true">Edit</button>
    <button type="button" class="btn btn-danger" v-if="(elem.name != null)" v-show="!show"
      @click="onDelete(elem.id)">Delete</button>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
    data () {
      return {
        note: {
          id: null,
          name: null,
          descript: null
        },
        newNote:{
          id: null,
          name: null,
          descript: null
        },
        show: false,
        show_createForm: false
      }
    },
    computed: mapState([
        "elem","notes"
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
      onDelete (id) {
        this.$store.dispatch('deleteNote', id)
      },
      onClose () {
          this.$store.dispatch('closeNote')
      }
    }
}
</script>

<style scoped lang="sass">
.area
  background-color: green
  width: 70%
  margin: 0 10px
  padding: 20px
  color: white
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
