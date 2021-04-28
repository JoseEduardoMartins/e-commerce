<template>
  <div id="app">
    <main>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
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
