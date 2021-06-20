<template>
    <form>
      <Information/>
      <Burgers/>
      <Accompaniments/>
      <Drinks/>
    </form>
</template>

<script>
import Information from '@/components/Information.vue'
import Burgers from '@/components/Burgers.vue'
import Accompaniments from '@/components/Accompaniments.vue'
import Drinks from '@/components/Drinks.vue'
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
    getDrink (data) {
      if (this.shoppingCart.arrayDrinks.length > 0) {
        if (this.getDrinkArray(data) !== true) {
          this.shoppingCart.arrayDrinks.push(data)
        }
      } else {
        this.shoppingCart.arrayDrinks.push(data)
      }
    },
    getDrinkArray (data) {
      for (let i = 0; i < this.shoppingCart.arrayDrinks.length; i++) {
        if (this.shoppingCart.arrayDrinks[i][0] === data[0]) {
          this.shoppingCart.arrayDrinks.splice(i, 1)
          this.shoppingCart.arrayDrinks.push(data)
          return true
        }
      }
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
    Information,
    Burgers,
    Accompaniments,
    Drinks
  }
}
</script>

<style scoped>

</style>
