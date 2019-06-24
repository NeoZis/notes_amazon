<template>
  <div class="index">
    <div class="navigation overflow-auto">
      <ul>
        <li
         v-for="post in posts"
         :key="post.id"
         @click="elem.name = post.title, elem.descript = post.body">
          {{post.title}}
        </li>
      </ul>
    </div>
    <div class="area">
      <div>
        <input type="text"
         v-if="show"
         :value = elem.name>
        <input type="text"
         v-if="show"
         :value = elem.descript>
         <div v-else>
            <h2>{{elem.name}}</h2>
            <p>{{elem.descript}}</p>
         </div>
      </div>
       <button
        type="button"
        class="btn btn-success"
        v-if = "show"
        @click = "show = false">Success</button>
      <button
       type = "button"
       class = "btn btn-warning"
       v-if = "(elem.name !== null)"
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
          name: null,
          tags: null,
          descript: null
        },
        show: false
      }
    },
    computed: mapState([
        "posts"
    ])

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
input
  margin-bottom: 10px
  row: 30
</style>
