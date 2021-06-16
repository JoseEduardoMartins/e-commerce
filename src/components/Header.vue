<template>
    <header>
        <img class="logo" src="../assets/logoTopBurger.png"/>
        <div class="menu">
            <router-link class="menu__item" :to="{ name: 'Home', hash: '#whoWeAre'}">Burgers</router-link>
            <router-link class="menu__item" :to="{ name: 'Home', hash: '#whoWeAre'}">Bebidas</router-link>
            <router-link class="menu__item" :to="{ name: 'Home', hash: '#whoWeAre'}">Acompanhamentos</router-link>
        </div>
        <div @mouseover="showCart" @mouseout="hideCart" class="cart">
            <i class="fas fa-shopping-cart cart_icon"><span>{{this.cart.amount}}</span></i>
        </div>
    </header>
</template>

<script>
export default {
  data () {
    return {
      visibilidade: false,
      kebabs: this.cart.arrayKebab
    }
  },
  props: {
    cart: Object,
    existKebab: Boolean
  },
  methods: {
    showCart: function () {
      this.visibilidade = true
    },
    hideCart: function () {
      this.visibilidade = false
    }
  }
}
</script>

<style scoped>
header{
    width: 100%;
    height: 65px;
    position: fixed;
    background-color: #222222;
    display: flex;
    justify-content: space-between;
    z-index: 999;
}
.logo{
    width: 110px;
    padding: 5px 5px;
}
.menu {
    display: flex;
    align-items: center;
}

.menu__item {
    padding: 0 20px 0;
    color: #d26d34;
    font-size: 14px;
    text-decoration: none;
    position: relative;
}
.menu__item:hover {
    text-decoration: underline;
    color: #fff;
}
.cart{
    margin-right: 5px;
}
    .cart_icon{
        margin-top: 10px;
        font-size: 30px;
        color: #d26d34;
    }
        span {
            color: white;
            font-size: 18px;
            vertical-align: 15px;
        }
@media (min-width: 600px) {
    .menu__item {
        font-size: 18px;
    }
}
</style>
