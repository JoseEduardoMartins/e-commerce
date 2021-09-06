<template>
  <div :id="produce.idCss" :class="produce.classCss">
    <div class="title">{{produce.name}}</div>
    <div class="container-item">
      <div v-for="product in produce.products" :key="product.name" class="item-product" @click="emitProduct(product)">
        <div class="product item" v-if="product.description !== '' & product.serve !== 0 ">
          <div>
            <div class="sub-title">{{product.name}}</div>
            <div class="description">{{product.description}}</div> <br>
          </div>
          <div>
            <div class="serve" v-if="product.serve == 1 ">Serve {{product.serve}} pessoa</div>
            <div class="serve" v-else-if="product.serve > 1">Serve {{product.serve}} pessoas</div><br>
            <div class="value">R${{product.value.toFixed(2)}}</div>
          </div>
        </div>
        <div v-else>
            <div class="sub-title">{{product.name}}</div>
            <div class="value">A partir de R${{product.value.toFixed(2)}}</div>
        </div>
        <div class="product image">
          <img src="../assets/burger.jpg" alt="" class="image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      produce: this.product
    }
  },
  props: {
    product: Object
  },
  methods: {
    emitProduct (data) {
      const t = {...data}
      this.$emit('openProduct', t)
    }
  }
}
</script>

<style scoped>
.container{
  width: calc(100% - 20px);
  margin: 95px auto 0;
  background-color: #222222;
  border-radius: 10px;
  color: white;
}
.container.accompaniments{
  margin: 20px auto 0;
}
.container.drinks{
  margin: 20px auto 0;
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
