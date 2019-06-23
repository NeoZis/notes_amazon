<template>
    <div class="navigation overflow-auto">
        <ul>
            <li v-for="post in posts" :key="post.id">
                {{post.title}}
            </li>
        </ul>
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
.navigation
    background-color: yellow
    width: 30%
    margin: 0 10px
    height: 550px;
li
    padding-top: 10px
</style>
