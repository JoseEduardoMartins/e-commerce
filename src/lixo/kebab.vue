<template>
    <div class="form_menu first">
        <div class="title_menu">Kebab</div>
        <ul class="item_list first">
            <div>
                <li class="title_list">Pão:</li>
                <dd>Pão sirio</dd>
            </div>
            <div>
                <li class="title_list">Molho</li>
                <dd>Tour</dd><br>
            </div>
            <div>
                <li class="title_list">Carner:</li>
                <dd><input type="radio" value="bovina" v-model="meatField"> Bovina R$21,00</dd>
                <dd><input type="radio" value="suina" v-model="meatField"> Suina R$19,00</dd>
                <dd><input type="radio" value="frango" v-model="meatField"> Frango R$19,00</dd>
            </div>
            <div>
                <li class="title_list">saladas</li>
                <dd><input type="checkbox" value="mixDeAlface" v-model="saladsField"> Mix de Alface</dd>
                <dd><input type="checkbox" value="rucula" v-model="saladsField"> Rúcula</dd>
                <dd><input type="checkbox" value="cenoura" v-model="saladsField"> Cenoura</dd>
                <dd><input type="checkbox" value="cebolaRoxa" v-model="saladsField"> Cebola Roxa</dd>
                <dd><input type="checkbox" value="pimentao" v-model="saladsField"> Pimentão</dd>
                <dd><input type="checkbox" value="picles" v-model="saladsField"> Picles</dd>
                <dd><input type="checkbox" value="pepinoJapones" v-model="saladsField"> Pepino Japonês</dd>
                <dd><input type="checkbox" value="tomateCereja" v-model="saladsField"> Tomate Cereja</dd>
                <dd><input type="checkbox" value="cebolaCaramelizada" v-model="saladsField"> Cebola Caramelizada</dd>
            </div>
            <div>
                <li class="title_list">Adicionais:</li>
                <dd><input type="checkbox" value="bovina" v-model="additionalField"> Carne Bovina R$5,00</dd>
                <dd><input type="checkbox" value="suina" v-model="additionalField"> Carne Suína R$4,00</dd>
                <dd><input type="checkbox" value="frango" v-model="additionalField"> Frango R$4,00</dd>
                <dd><input type="checkbox" value="bacon" v-model="additionalField"> Bacon R$4,00</dd>
                <dd><input type="checkbox" value="coracao" v-model="additionalField"> Coração R$3,00</dd>
                <dd><input type="checkbox" value="molhoTour" v-model="additionalField"> Molho Tour R$1,00</dd>
                <dd><input type="checkbox" value="salada" v-model="additionalField"> saladas R$1,00</dd>
            </div>
            <div>
                <li class="title_list">Brinde</li>
                <dd><input type="radio" value="chipsSalgada" v-model="presentField">Chips Salgada</dd>
                <dd><input type="radio" value="chipsDoce" v-model="presentField"> Chips Doce</dd>
            </div>
        </ul>
        <input id="quantidade" class="quantidade kebab" type="number" v-model="amountField" min="1">
        <a href="#" class="add" title="Adicionar no pedido" @click="addKebab">
            <i class="fas fa-cart-plus icon"></i>
        </a>
        <h3 v-if="msgError" class="msgErrorKebab">Verifique se a carne e o brinde esta selecioando.</h3>
    </div>
</template>

<script>
export default {
  data () {
    return {
      meatField: '',
      saladsField: [],
      additionalField: [],
      presentField: '',
      amountField: 1,
      total: 0,
      kebab: {},
      msgError: false
    }
  },
  methods: {
    emitKebab: function (data) {
      this.$emit('emitKebab', data)
    },
    calcTotal: function () {
      (this.meatField === 'bovina') ? this.total += 21 : this.total += 0;
      (this.meatField === 'suina') ? this.total += 19 : this.total += 0;
      (this.meatField === 'frango') ? this.total += 19 : this.total += 0
      for (let i = 0; i <= this.additionalField.length; i++) {
        (this.additionalField[i] === 'bovina') ? this.total += 5 : this.total += 0;
        (this.additionalField[i] === 'suina') ? this.total += 4 : this.total += 0;
        (this.additionalField[i] === 'frango') ? this.total += 4 : this.total += 0;
        (this.additionalField[i] === 'bacon') ? this.total += 4 : this.total += 0;
        (this.additionalField[i] === 'coracao') ? this.total += 3 : this.total += 0;
        (this.additionalField[i] === 'molhoTour') ? this.total += 1 : this.total += 0;
        (this.additionalField[i] === 'salada') ? this.total += 1 : this.total += 0
      }
      this.total *= this.amountField
    },
    dataKebab: function () {
      this.kebab.id = Date.now()
      this.kebab.meatField = this.meatField
      this.kebab.salads = this.saladsField
      this.kebab.additional = this.additionalField
      this.kebab.present = this.presentField
      this.kebab.amount = this.amountField
      this.kebab.total = this.total
    },
    resetFiends: function () {
      this.meatField = ''
      this.saladsField = []
      this.additionalField = []
      this.presentField = ''
      this.amountField = 1
      this.total = 0
    },
    addKebab: function () {
      if (this.meatField.length < 3 || this.presentField.length < 3) {
        this.msgError = true
      } else {
        this.calcTotal()
        this.dataKebab()
        this.resetFiends()
        this.msgError = false
        this.emitKebab(this.kebab)
      }
    }
  }
}
</script>

<style>
.msgErrorKebab{
    text-align: center;
    color: red;
}
.form_menu.first{
    position: relative;
    top: 80px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
}
.item_list.first{
    display: flex;
    justify-content: space-around;
}
.quantidade.kebab{
    font-size: 20px;
    padding:6px;
    position: absolute;
    left: 20px;
    bottom: 20px;
    width: 90px;
}
.quantidade.kebab::-webkit-inner-spin-button{
    transform: rotate(90deg) scale(0.8, 0.9);
}
</style>
