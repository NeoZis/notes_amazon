<template>
  <div class="area">
    <div v-for="post in posts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"

  export default {
    computed: mapState([
      "posts"
    ])
  }

</script>

<style scoped lang="sass">
  .area
    background-color: green
    width: 70%
    margin: 0 10px
    padding: 20px
    color: white

</style>
