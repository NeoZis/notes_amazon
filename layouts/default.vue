<template>
  <div>
<header>
<div class="title">
  <h1 class="font-weight-bold">Notes GS</h1>
  </div>  
  <div class="search">
    <b-navbar-nav class="ml-auto">
        <b-nav-form class="center">
          <b-form-input size="sm" class="mr-sm-2 text-center" placeholder="Search"></b-form-input>
        </b-nav-form>
    </b-navbar-nav>
  </div>
</header>
<nav>
  
</nav>
    <nuxt />
  </div>
</template>

<style scoped lang="sass">
h1
  text-align: center
  color: white
  font-style
header
  width: 100%
  display: flex
  justify-content: flex-start
  height: 70px
  padding: 10px
.title
  background-color: blue
  width: 70%
.search
  background-color: red
  width: 30%
.center
  display: flex
  justify-content: center
  padding-top: 10px
</style>
