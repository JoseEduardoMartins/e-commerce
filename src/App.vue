<template>
  <div id="app">
    <Header :cart='shoppingCart' :existKebab='existKebab'/>
    <main>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
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
    background-color: #fedf84;
}
</style>
