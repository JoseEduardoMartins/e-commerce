<template>
    <div>
        <Header :cart="shoppingCart" :visibility="false" :existKebab="existKebab"/>
        <form>
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
                        <dd><input type="radio" value="bovina" v-model="carneField"> Bovina R$21,00</dd>
                        <dd><input type="radio" value="suina" v-model="carneField"> Suina R$19,00</dd>
                        <dd><input type="radio" value="frango" v-model="carneField"> Frango R$19,00</dd>
                    </div>
                    <div>
                        <li class="title_list">Saladas</li>
                        <dd><input type="checkbox" value="mixDeAlface" v-model="saladasField"> Mix de Alface</dd>
                        <dd><input type="checkbox" value="rucula" v-model="saladasField"> Rúcula</dd>
                        <dd><input type="checkbox" value="cenoura" v-model="saladasField"> Cenoura</dd>
                        <dd><input type="checkbox" value="cebolaRoxa" v-model="saladasField"> Cebola Roxa</dd>
                        <dd><input type="checkbox" value="pimentao" v-model="saladasField"> Pimentão</dd>
                        <dd><input type="checkbox" value="picles" v-model="saladasField"> Picles</dd>
                        <dd><input type="checkbox" value="pepinoJapones" v-model="saladasField"> Pepino Japonês</dd>
                        <dd><input type="checkbox" value="tomateCereja" v-model="saladasField"> Tomate Cereja</dd>
                        <dd><input type="checkbox" value="cebolaCaramelizada" v-model="saladasField"> Cebola Caramelizada</dd>
                    </div>
                    <div>
                        <li class="title_list">Adicionais:</li>
                        <dd><input type="checkbox" value="bovina" v-model="adicionaisField"> Carne Bovina R$5,00</dd>
                        <dd><input type="checkbox" value="suina" v-model="adicionaisField"> Carne Suína R$4,00</dd>
                        <dd><input type="checkbox" value="frango" v-model="adicionaisField"> Frango R$4,00</dd>
                        <dd><input type="checkbox" value="bacon" v-model="adicionaisField"> Bacon R$4,00</dd>
                        <dd><input type="checkbox" value="coracao" v-model="adicionaisField"> Coração R$3,00</dd>
                        <dd><input type="checkbox" value="molhoTour" v-model="adicionaisField"> Molho Tour R$1,00</dd>
                        <dd><input type="checkbox" value="salada" v-model="adicionaisField"> Saladas R$1,00</dd>
                    </div>
                    <div>
                        <li class="title_list">Brinde</li>
                        <dd><input type="radio" value="chipsSalgada" v-model="brindeField">Chips Salgada</dd>
                        <dd><input type="radio" value="chipsDoce" v-model="brindeField"> Chips Doce</dd>
                    </div>
                </ul>
                <input id="quantidade" class="quantidade kebab" type="number" v-model="quantidadeField" min="1">
                <a href="#" class="add" title="Adicionar no pedido" @click="addKebab">
                    <i class="fas fa-cart-plus icon"></i>
                </a>
                <h3 v-if="msgError" id="msgErrorKebab">Verifique se a carne e o brinde esta selecioando.</h3>
            </div>
            <Outros/>
        </form>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Outros from '@/components/outros.vue'
export default {
  data () {
    return {
      carneField: '',
      saladasField: [],
      adicionaisField: [],
      brindeField: '',
      quantidadeField: 1,
      total: 0,
      shoppingCart: {
        arrayKebab: [],
        total: 0,
        amount: 0
      },
      existKebab: false,
      msgError: false
    }
  },
  components: {
    Header,
    Outros
  },
  methods: {
    calcTotal: function () {
      (this.carneField === 'bovina') ? this.total += 21 : this.total += 0;
      (this.carneField === 'suina') ? this.total += 19 : this.total += 0;
      (this.carneField === 'frango') ? this.total += 19 : this.total += 0
      for (let i = 0; i <= this.adicionaisField.length; i++) {
        (this.adicionaisField[i] === 'bovina') ? this.total += 5 : this.total += 0;
        (this.adicionaisField[i] === 'suina') ? this.total += 4 : this.total += 0;
        (this.adicionaisField[i] === 'frango') ? this.total += 4 : this.total += 0;
        (this.adicionaisField[i] === 'bacon') ? this.total += 4 : this.total += 0;
        (this.adicionaisField[i] === 'coracao') ? this.total += 3 : this.total += 0;
        (this.adicionaisField[i] === 'molhoTour') ? this.total += 1 : this.total += 0;
        (this.adicionaisField[i] === 'salada') ? this.total += 1 : this.total += 0
      }
      this.total *= this.quantidadeField
    },
    addKebab: function () {
      if (this.carneField.length < 3 || this.brindeField.length < 3) {
        this.msgError = true
      } else {
        this.calcTotal()
        this.shoppingCart.arrayKebab.push({id: Date.now(), carne: this.carneField, saladas: this.saladasField, adicionais: this.adicionaisField, brinde: this.brindeField, quantidade: this.quantidadeField, total: this.total})
        this.shoppingCart.total += this.total
        this.resetFiends()
        this.shoppingCart.amount += 1
        if (this.existKebab === false) {
          this.existKebab = true
        }
        this.msgError = false
      }
    },
    resetFiends: function () {
      this.carneField = ''
      this.saladasField = []
      this.adicionaisField = []
      this.brindeField = ''
      this.quantidadeField = 1
      this.total = 0
    }
  }
}
</script>

<style>
.form_menu{
    width: calc(100% - 100px);
    border-bottom: 1px solid #600107;
    color: #600107;
}
#msgErrorKebab{
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
.form_menu.second{
    margin: 95px auto 0;
}
.form_menu.third{
    margin: 15px auto 0;
}
.form_menu.third.last{
    text-align: center;
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
.item_list.first{
    display: flex;
    justify-content: space-around;
}
.item_list.second{
    display: inline;
}
.item_list.second.itens{
    display: flex;
    justify-content: space-around;
}
.title_list{
    font-weight: bold;
}
.quantidade{
    border: 1px solid #600107;
    background-color: #fedf84;
    color: #600107;
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
.quantidade.bebidas{
    font-size: 16px;
    width: 70px;
    margin-bottom: 5px;
}
.quantidade.bebidas::-webkit-inner-spin-button{
    transform: rotate(90deg) scale(0.6, 0.7);
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
.item_endereco{
    margin: 30px 0;
    display: flex;
    justify-content: space-around;
}
.endereco{
    background-color: #fedf84;
    border: 1px solid #600107;
    font-size: 14px;
}
input[type="text"]:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fedf84 inset;
    -webkit-text-fill-color: black !important;
}
#uf{
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
