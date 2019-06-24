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
        <h2>{{elem.name}}</h2>
        <p>{{elem.descript}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
    data () {
      return {
        elem: {
          name: '',
          descript: ''
        }
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
    display: flex;
    justify-content: flex-start;
    min-height: 500px;

</style>
