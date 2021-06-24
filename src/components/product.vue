<template>
  <div id="product" class="product">
    <div class="product_item">
      <img src="../assets/burger.jpg" alt="">
    </div>
    <div class="product_item">

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
  }
}
</script>

<style scoped>
.product{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: calc(100% - 100px);
    height: calc(100% - 50px);
    border: 1px solid gray;
    border-radius: 10px;
    background-color: white;
    z-index: 998;
}
    .product_item{
        border: 1px solid red;
    }
</style>
