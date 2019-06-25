<template>
  <div class="index">
    <div class="navigation overflow-auto">
      <ul>
        <li
         v-for="post in posts"
         :key="post.id"
         @click="onClick(post)">
          {{post.title}}
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
        @click ="onSave(elem.id, elem.name)">Success</button>
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
          tags: null,
          descript: null
        },
        show: false
      }
    },
    computed: mapState([
        "posts"
    ]),
    methods: {
      onSave(idPost, namePost) {
        this.show = false;
        this.$store.dispatch('saveNewPosts', {id: idPost, name: namePost})
      },
      onClick(post) {
        if (!this.show){
        this.elem.name = post.title;
        this.elem.descript = post.body;
        this.elem.id = post.id
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
