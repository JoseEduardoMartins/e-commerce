<template>
  <div id="app">
    <Header :cart='shoppingCart' :existKebab='existKebab'/>
    <Information/>
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Information from '@/components/Information.vue'
import Home from '@/components/Home.vue'
import Footer from '@/components/Footer.vue'
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
    Information,
    Home,
    Footer
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
