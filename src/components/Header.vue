<template>
    <header>
        <img class="logo" src="../assets/logoTopBurger.png" @click="moveTop(top)"/>
        <div class="menu">
            <a class="menu__item" @click="moveTop(burgers)">Burgers</a>
            <a class="menu__item" @click="moveTop(accompaniments)">Porções de Batatas</a>
            <a class="menu__item" @click="moveTop(drinks)">Bebidas</a>
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
      kebabs: this.cart.arrayKebab,
      top: 0,
      burgers: 'burgers',
      accompaniments: 'accompaniments',
      drinks: 'drinks'
    }
  },
  props: {
    cart: Object,
    existKebab: Boolean
  },
  methods: {
    showCart () {
      this.visibilidade = true
    },
    hideCart () {
      this.visibilidade = false
    },
    moveTop (to) {
      if (to !== 0) {
        let element = document.getElementById(to)
        let top = element.offsetTop
        window.scrollTo(0, top - 70)
      } else {
        window.scrollTo(0, to)
      }
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
    z-index: 998;
}
.logo{
    width: 80px;
    height: 40px;
    margin-top: 5px;
    padding: 5px 5px;
    cursor: pointer;
}
.menu {
    display: flex;
    align-items: center;
}

.menu__item {
    padding: 0 10px 0;
    color: #d26d34;
    font-size: 14px;
    text-decoration: none;
    position: relative;
    cursor: pointer;
}
.menu__item:hover {
    text-decoration: underline;
    color: #fff;
}
.cart{
    margin-right: 5px;
}
    .cart_icon{
        margin-top: 12px;
        font-size: 25px;
        color: #d26d34;
    }
        span {
            color: white;
            font-size: 18px;
            vertical-align: 15px;
        }
@media (min-width: 700px) {
    .logo{
        width: 110px;
        height: 55px;
        margin: 0;
    }
    .menu__item {
        font-size: 18px;
        padding: 0 20px 0;
    }
    .cart_icon{
        margin-top: 10px;
        font-size: 30px;
    }
}
</style>
