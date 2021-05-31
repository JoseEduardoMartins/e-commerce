<template>
    <div class="form_menu third last">
        <div class="title_menu">Finalizar Pedido</div>
        <label>Forma de pagamento:</label>
        <select class="uf" v-model="pay">
        <option>Dinheiro</option>
        <option>Cartão</option>
        <option>Pix</option>
        </select>
        <br>
        <button id="enviar" @click="orderSubmit">Enviar Pedido</button><br><br>
    </div>
</template>

<script>
export default {
  data () {
    return {
      pay: '',
      shoppingCart: this.cart
    }
  },
  props: {
    cart: Object,
    arrauAddress: Array
  },
  methods: {
    orderSubmit () {
      window.location.href = 'https://api.whatsapp.com/send?phone=5548996360340'
    }
  }
}
</script>

<style>
.form_menu.third.last{
    text-align: center;
}
.uf{
    background-color: #fedf84;
    margin: 30px 0;
}
#enviar{
    border: 1px solid #600107;
    border-radius: 15px;
    padding: 10px;
    color: white;
    background-color: #600107;
    font-size: 15px;
    text-align: right;
}
</style>
