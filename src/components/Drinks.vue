<template>
    <div class="form_menu second">
        <div class="title_menu">Bebidas</div>
        <ul class="item_list second">
            <div class="item_list second itens">
                <div>
                    <li class="title_list">Água:</li>
                    <dd><input @click="emitDrink(water)" type="number" class="quantidade bebidas" value="0" min="0" v-model="water[2]"> Com gás R$3,00</dd>
                    <dd><input @click="emitDrink(gasWater)" type="number" class="quantidade bebidas" value="0" min="0" v-model="gasWater[2]"> Sem gás R$3,00</dd>
                </div>
                <div>
                    <li class="title_list">Refrigerante lata</li>
                    <dd><input @click="emitDrink(tinCoca)" type="number" class="quantidade bebidas" value="0" min="0" v-model="tinCoca[2]"> Coca-Cola R$5,00</dd>
                    <dd><input @click="emitDrink(tinCocaZero)" type="number" class="quantidade bebidas" value="0" min="0" v-model="tinCocaZero[2]"> Coca-Cola Zero R$5,00</dd>
                    <dd><input @click="emitDrink(tinGuarana)" type="number" class="quantidade bebidas" value="0" min="0" v-model="tinGuarana[2]"> Guaraná R$5,00</dd>
                    <dd><input @click="emitDrink(tinSprite)" type="number" class="quantidade bebidas" value="0" min="0" v-model="tinSprite[2]"> Sprite R$5,00</dd>
                    <dd><input @click="emitDrink(tinSchweppes)" type="number" class="quantidade bebidas" value="0" min="0" v-model="tinSchweppes[2]"> Schweppes Citrus R$5,00</dd>
                </div>
                <div>
                    <li class="title_list">Refrigerante 1 litro</li>
                    <dd><input @click="emitDrink(literPureza)" type="number" class="quantidade bebidas" value="0" min="0" v-model="literPureza[2]"> Pureza R$8,00</dd>
                </div>
                <div>
                    <li class="title_list">Refrigerante 1,5 litros</li>
                    <dd><input @click="emitDrink(literQuiteCoca)" type="number" class="quantidade bebidas" value="0" min="0" v-model="literQuiteCoca[2]"> Coca-Cola R$8,00</dd>
                    <dd><input @click="emitDrink(literQuiteGuarana)" type="number" class="quantidade bebidas" value="0" min="0" v-model="literQuiteGuarana[2]"> Guaraná R$8,00</dd>
                </div>
            </div>
            <div class="item_list second itens">
                <div>
                    <li class="title_list">Suco 290ml</li>
                    <dd><input @click="emitDrink(juiceMaracuja)" type="number" class="quantidade bebidas" value="0" min="0" v-model="juiceMaracuja[2]"> Del valle Maracujá R$5,00</dd>
                    <dd><input @click="emitDrink(juicePessego)" type="number" class="quantidade bebidas" value="0" min="0" v-model="juicePessego[2]"> Del valle Pêssego R$5,00</dd>
                </div>
                <div>
                    <li class="title_list">Chá 450ml</li>
                    <dd><input @click="emitDrink(teaLemon)" type="number" class="quantidade bebidas" value="0" min="0" v-model="teaLemon[2]"> Matte Leão limão R$5,00</dd>
                    <dd><input @click="emitDrink(teaOriginal)" type="number" class="quantidade bebidas" value="0" min="0" v-model="teaOriginal[2]"> Matte Leão original R$5,00</dd>
                </div>
                <div>
                    <li class="title_list">Cerveja Long neck</li>
                    <dd><input @click="emitDrink(longHeineken)" type="number" class="quantidade bebidas" value="0" min="0" v-model="longHeineken[2]"> Heineken R$8,00</dd>
                    <dd><input @click="emitDrink(longBudweiser)" type="number" class="quantidade bebidas" value="0" min="0" v-model="longBudweiser[2]"> Budweiser R$8,00</dd>
                </div>
                <div>
                    <li class="title_list">Cerveja lata</li>
                    <dd><input @click="emitDrink(tinBrahma)" type="number" class="quantidade bebidas" value="0" min="0" v-model="tinBrahma[2]"> Brahma R$5,00</dd>
                    <dd><input @click="emitDrink(tinSkolPilsen)" type="number" class="quantidade bebidas" value="0" min="0" v-model="tinSkolPilsen[2]"> Skol Pilsen R$5,00</dd>
                    <dd><input @click="emitDrink(tinSkolPuroMalte)" type="number" class="quantidade bebidas" value="0" min="0" v-model="tinSkolPuroMalte[2]"> Skol Puro Malte R$5,00</dd>
                    <dd><input @click="emitDrink(tinHeineken)" type="number" class="quantidade bebidas" value="0" min="0" v-model="tinHeineken[2]"> Heineken R$8,00</dd>
                    <dd><input @click="emitDrink(tinBudweiser)" type="number" class="quantidade bebidas" value="0" min="0" v-model="tinBudweiser[2]"> Budweiser R$8,00</dd>
                    <dd><input @click="emitDrink(tinBelaVista)" type="number" class="quantidade bebidas" value="0" min="0" v-model="tinBelaVista[2]"> Bela Vista R$8,00</dd>
                    <dd><input @click="emitDrink(tinDadoBier)" type="number" class="quantidade bebidas" value="0" min="0" v-model="tinDadoBier[2]"> Dado Bier R$6,00</dd>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      water: ['água', 3, 0],
      gasWater: ['água com gás', 3, 0],
      tinCoca: ['Coca-cola lata', 5, 0],
      tinCocaZero: ['Coca-cola zero lata', 5, 0],
      tinGuarana: ['Guaraná lata', 5, 0],
      tinSprite: ['Sprite lata', 5, 0],
      tinSchweppes: ['Schweppes Citrus lata', 5, 0],
      literPureza: ['Pureza 1L', 8, 0],
      literQuiteCoca: ['Coca-cola 1,5L', 8, 0],
      literQuiteGuarana: ['Guaraná 1,5L', 8, 0],
      juiceMaracuja: ['Del valle Maracujá', 5, 0],
      juicePessego: ['Del valle Pêssego', 5, 0],
      teaLemon: ['Matte Leão limão', 5, 0],
      teaOriginal: ['Matte Leão original', 5, 0],
      longHeineken: ['Heineken long neck', 8, 0],
      longBudweiser: ['Budweiser long neck', 8, 0],
      tinBrahma: ['Brahma lata', 5, 0],
      tinSkolPilsen: ['Skol Pilsen lata', 5, 0],
      tinSkolPuroMalte: ['Skol Puro Malte lata', 5, 0],
      tinHeineken: ['Heineken lata', 8, 0],
      tinBudweiser: ['Budweiser lata', 8, 0],
      tinBelaVista: ['Bela Vista lata', 8, 0],
      tinDadoBier: ['Dado Bier lata', 6, 0]
    }
  },
  methods: {
    emitDrink (data) {
      this.$emit('emitDrink', data)
    }
  }
}
</script>

<style>
.form_menu.second{
    margin: 95px auto 0;
}
.item_list.second{
    display: inline;
}
.item_list.second.itens{
    display: flex;
    justify-content: space-around;
}
.quantidade.bebidas{
    font-size: 16px;
    width: 70px;
    margin-bottom: 5px;
}
.quantidade.bebidas::-webkit-inner-spin-button{
    transform: rotate(90deg) scale(0.6, 0.7);
}
</style>
