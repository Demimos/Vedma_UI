<template>
  <div id="app">
        <Slide :closeOnNavigation="true">
          <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>
    <Home/>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
import Home from  './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home, 
    Slide
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
