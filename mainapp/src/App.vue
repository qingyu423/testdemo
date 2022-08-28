<template>
  <div id="app">
    <div>
      <router-link to="/">home</router-link> | 
      <router-link to="/about">about</router-link> | 
      <router-link to="/vueChild">vueChild</router-link> 
    </div>
    <router-view />
    <div id="vueContainer"></div>
  </div>
</template>

<script>

export default {
  name: 'App'
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
