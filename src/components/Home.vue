<template>
    <form>
        <Kebab @emitClick="getKebab"/>
        <Drinks/>
        <Address/>
        <CheckOut/>
    </form>
</template>

<script>
import Kebab from '@/components/Kebab.vue'
import Drinks from '@/components/Drinks.vue'
import Address from '@/components/Address.vue'
import CheckOut from '@/components/CheckOut.vue'
export default {
  data () {
    return {
      shoppingCart: {
        arrayKebab: [],
        arrayDrinks: [],
        amount: 0,
        total: 0
      },
      arrayAddress: []
    }
  },
  methods: {
    getKebab (data) {
      this.shoppingCart.arrayKebab.push(data)
    },
    getAddress (data) {
      if (this.arrayAddress.length === 0) {
        this.arrayAddress = data
      } else {
        this.arrayAddress = []
        this.arrayAddress = data
      }
      console.log(this.arrayAddress)
    }
  },
  components: {
    Kebab,
    Drinks,
    Address,
    CheckOut
  }
}
</script>

<style>
.form_menu{
    width: calc(100% - 100px);
    border-bottom: 1px solid #600107;
    color: #600107;
}
.title_menu{
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    text-decoration: underline;
}
.item_list{
    margin: 30px 100px;
}
.title_list{
    font-weight: bold;
}
.quantidade{
    border: 1px solid #600107;
    background-color: #fedf84;
    color: #600107;
}
.quantidade::-webkit-inner-spin-button {
    all: unset;
    min-width: 21px;
    min-height: 45px;
    margin: 15px;
    padding: 0px;
    cursor:pointer;
    background-image:
    linear-gradient(to top, transparent 0px, transparent 16px, #fedf84 16px, #fedf84 26px, transparent 26px, transparent 35px, #600107 35px,#600107 36px,transparent 36px, transparent 40px),
    linear-gradient(to right, transparent 0px, transparent 10px, #600107 10px, #600107 11px, transparent 11px, transparent 21px);
}
.quantidade:focus, .endereco:focus{
    box-shadow: 0 0 0 0;
    border: 1px solid #600107;
    outline: 0;
}

.add{
    position: absolute;
    right: 30px;
    bottom: 20px;
}
.icon{
    font-size: 40px;
    color: #600107;
    background-color: #fedf84;
}
input[type="text"]:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fedf84 inset;
    -webkit-text-fill-color: black !important;
}
</style>
