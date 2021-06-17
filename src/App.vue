<template>
  <div id="app">
    <Header :cart='shoppingCart' :existKebab='existKebab'/>
    <Home/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Home from '@/components/Home.vue'
export default {
  name: 'App',
  data () {
    return {
      shoppingCart: {
        amount: 0
      },
      existKebab: false
    }
  },
  components: {
    Header,
    Home
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    border: 0;
}
body {
  font-family: "Open Sans", sans-serif;
  background-color: gray;
}
</style>
