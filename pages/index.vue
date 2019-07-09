<template>
  <div class="index">
    <Navigation />
    <NotesArea />
  </div>
</template>

<script>
import Navigation from "~/components/Navigation"
import NotesArea from "~/components/NotesArea"

export default {
  components: {
    Navigation,
    NotesArea
  }
}
</script>

<style lang="sass">
.index
  display: flex
  justify-content: flex-start
  min-height: 500px
</style>
