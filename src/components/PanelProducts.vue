<template>
  <div class="container">
    <div class="title">Porções de Batatas</div>
    <div class="container-item">
      <div v-for="Accompaniment in Accompaniments" :key="Accompaniment.name" class="item-product" @click="emitProduct(Accompaniment)">
        <div class="product item">
          <div>
            <div class="sub-title">{{Accompaniment.name}}</div>
            <div class="description">{{Accompaniment.description}}</div> <br>
          </div>
          <div>
            <div class="serve" v-if="Accompaniment.serve == 1">Serve {{Accompaniment.serve}} pessoa</div>
            <div class="serve" v-else>Serve {{Accompaniment.serve}} pessoas</div><br>
            <div class="value">R${{Accompaniment.value.toFixed(2)}}</div>
          </div>
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
      
    }
  },
  methods: {
    emitProduct (data) {
      this.$emit('openProduct', data)
    }
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