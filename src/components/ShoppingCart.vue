<template>
  <div id="cart" class="shoppingCart" v-if="visibilidade">
    <div v-if="!existKebab">
        <div class="shoppingCart_nullText">Seu carrinho está vazio</div>
    </div>
    <div v-else-if="existKebab">
        <div v-for="product in arrayProduct" :key="product.id">
            <div class="shoppingCart_item">
                <div class="title_product">{{product.name}}</div>
                <div>
                    <i class="fas fa-trash-alt delete"></i>
                </div>
                <div class="item_product">{{product.bread}}</div>
                <div v-for="additional in product.additional" :key="additional[0]">
                    <div v-if="additional.amount !== 0" class="item_product"> {{additional.amount}}x{{additional.name}}</div>
                </div>
                <div class="item_product">Quantidade - {{product.amount}}</div>
                <div class="item_product total">Total - R$ {{product.total.toFixed(2)}}</div>
            </div>
        </div>
        <div class="shoppingCart_item subTotal">
            <div class="subtotal">Subtotal</div>
            <div class="item_product total cart">Total - R$ {{this.cart.total.toFixed(2)}}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      shoppingCart: this.cart,
      arrayProduct: this.cart.arrayProduct
    }
  },
  props: {
    cart: Object,
    existKebab: Boolean,
    visibilidade: Boolean
  }
}
</script>

<style>
.shoppingCart{
    position: fixed;
    top: 65px;
    right: 0px;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
    width: 300px;
    min-height: 100px;
    background-color: white;
    z-index: 998;
}
.shoppingCart_nullText{
    position: relative;
    text-align: center;
    line-height: 100px;
    font-weight: bold;
    color: #600107;
}
.shoppingCart_item{
    position: relative;
    width: calc(100% - 30px);
    margin: 15px auto 15px;
    border-bottom: 1px solid #C0C0C0;
}
.shoppingCart_item.subTotal{
    border: 0px;
    font-size: 13px;
    font-weight: bold;
}
.title_product{
    font-weight: bold;
    text-align: center;
    font-size: 15px;
    text-decoration: underline;
}
.delete{
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 25px;
    color: red;
}
.item_product{
    font-size: 13px;
    margin-top: 3px;
    color: gray;
}
.item_product.total{
    position: absolute;
    right: 0px;
    bottom: 0px;
    font-weight: bold;
    color: black;
}
.item_product.total.cart{
    font-size: 15px;
}
</style>
