<template>
    <form>
      <Burgers @openProduct="openProduct"/>
      <Accompaniments @openProduct="openProduct"/>
      <Drinks @openProduct="openProduct"/>
      <div v-if="visibilityProduct">
        <Product @closeProduct="closeProduct" @setProduct="setProduct" :product="product"/>
      </div>
    </form>
</template>

<script>
import Burgers from '@/components/Burgers.vue'
import Accompaniments from '@/components/Accompaniments.vue'
import Drinks from '@/components/Drinks.vue'
import Product from '@/components/Product.vue'
export default {
  data () {
    return {
      arrayAddress: [],
      product: {},
      visibilityProduct: false
    }
  },
  methods: {
    openProduct (data) {
      document.documentElement.style.overflow = 'hidden'
      this.visibilityProduct = !this.visibilityProduct
      this.product = data
    },
    closeProduct (data) {
      document.documentElement.style.overflow = 'auto'
      this.visibilityProduct = data
    },
    setProduct (data) {
      this.$emit('addProduct', data)
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
    Burgers,
    Accompaniments,
    Drinks,
    Product
  }
}
</script>

<style>
.container{
  width: calc(100% - 20px);
  margin: 95px auto 0;
  background-color: #222222;
  border-radius: 10px;
  color: white;
}
  .title{
    font-size: 25px;
    font-weight: bold;
    padding: 20px;
  }
  .container-item{
    width: calc(100% - 40px);
    margin: auto;
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
  }
  .item-product{
    width: 90%;
    margin: 10px;
    cursor: pointer;
    display: flex;
    justify-content:space-between;
    border: 1px solid #222222;
  }
  .item-product:hover{
    border: 1px solid #1C1C1C;
  }
    .product.item{
      display: flex;
      flex-wrap: wrap;
      align-content:space-between;
    }
    .product.image{
      margin-left: 10px;
    }
    .sub-title{
      margin-bottom: 10px;
      font-weight: bold;
    }
    .image{
      width: 120px;
      height: 120px;
      border-radius: 10px;
    }
    .serve{
      font-size: 15px;
      font-weight: bold;
    }
    .value{
      font-weight: bold;
      color: #808080;
    }
    .description{
      font-size: 15px;
    }
@media (min-width: 500px) {
  .container{
    width: calc(100% - 50px);
  }
}
@media (min-width: 700px) {
  .container{
      width: calc(100% - 100px);
  }
    .item-product{
      width: 45%;
    }
}
</style>
