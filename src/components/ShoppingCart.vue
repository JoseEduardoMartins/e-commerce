<template>
  <div id="cart" class="shoppingCart" v-if="visibilidade">
            <div v-if="!existKebab">
                <div class="shoppingCart_nullText">Seu carrinho está vazio</div>
            </div>
            <div v-else-if="existKebab">
                <div v-for="kebab in kebabs" :key="kebab.id">
                    <div class="shoppingCart_item">
                        <div class="title_kebab">Kebab</div>
                        <div>
                            <i class="fas fa-trash-alt delete"></i>
                        </div>
                        <div class="item_kebab">Carne - {{kebab.carne}}</div>
                        <div class="item_kebab">Saladas - {{kebab.saladas}}</div>
                        <div class="item_kebab">Adicionais - {{kebab.adicionais}}</div>
                        <div class="item_kebab">Brinde - {{kebab.brinde}}</div>
                        <div class="item_kebab">Quantidade - {{kebab.quantidade}}</div>
                        <div class="item_kebab total">Total - R$ {{kebab.total.toFixed(2)}}</div>
                    </div>
                </div>
                <div class="shoppingCart_item subTotal">
                    <div class="subtotal">Subtotal</div>
                    <div class="item_kebab total cart">Total - R$ {{this.cart.total.toFixed(2)}}</div>
                </div>
            </div>
        </div>
</template>

<script>
export default {

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
.title_kebab{
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
.item_kebab{
    font-size: 13px;
}
.item_kebab.total{
    position: absolute;
    right: 0px;
    bottom: 0px;
    font-weight: bold;
    color: #0075ff;
}
.item_kebab.total.cart{
    font-size: 15px;
}
</style>
