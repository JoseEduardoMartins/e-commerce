<template>
  <div id="app">
    <Header :cart='shoppingCart' :existProduct='existProduct'/>
    <Information/>
    <Home @addProduct="addProduct"/>
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
        arrayProduct: [],
        amount: 0,
        total: 0
      },
      existProduct: false
    }
  },
  methods: {
    addProduct (data) {
      this.shoppingCart.arrayProduct.push(data)
      this.existProduct = true
      this.shoppingCart.amount += 1
      this.shoppingCart.total += data.total
      console.log(this.shoppingCart)
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