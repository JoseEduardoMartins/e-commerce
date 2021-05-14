<template>
  
</template>

<script>
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
  data () {
    return {
      water: 0,
      gasWater: 0,
      tinCoca: 0,
      tinCocaZero: 0,
      tinGuarana: 0,
      tinSprite: 0,
      tinSchweppes: 0,
      literPureza: 0,
      literQuiteCoca: 0,
      literQuiteGuarana: 0,
      juiceMaracuja: 0,
      juicePessego: 0,
      teaLemon: 0,
      teaOriginal: 0,
      longHeineken: 0,
      longBudweiser: 0,
      tinBrahma: 0,
      tinSkolPilsen: 0,
      tinSkolPuroMalte: 0,
      tinHeineken: 0,
      tinBudweiser: 0,
      tinBelaVista: 0,
      tinDadoBier: 0,
      drinks: {}
    }
  },
  methods: {
    emitDrinks () {
      (this.water > 0) ? this.drinks.water = [3, this.water] : this.water = 0;
      (this.gasWater > 0) ? this.drinks.gasWater = [3, this.gasWater] : this.gasWaterr = 0;
      (this.tinCoca > 0) ? this.drinks.tinCoca = [5, this.tinCoca] : this.tinCoca = 0;
      (this.tinCocaZero > 0) ? this.drinks.tinCocaZero = [5, this.tinCocaZero] : this.tinCocaZero = 0;
      (this.tinGuarana > 0) ? this.drinks.tinGuarana = [5, this.tinGuarana] : this.tinGuarana = 0;
      (this.tinSprite > 0) ? this.drinks.tinSprite = [5, this.tinSprite] : this.tinSprite = 0;
      (this.tinSchweppes > 0) ? this.drinks.tinSchweppes = [5, this.tinSchweppes] : this.tinSchweppes = 0;
      (this.literPureza > 0) ? this.drinks.literPureza = [8, this.literPureza] : this.literPureza = 0;
      (this.literQuiteCoca > 0) ? this.drinks.literQuiteCoca = [8, this.literQuiteCoca] : this.literQuiteCoca = 0;
      (this.literQuiteGuarana > 0) ? this.drinks.literQuiteGuarana = [8, this.literQuiteGuarana] : this.literQuiteCoca = 0;
      (this.juiceMaracuja > 0) ? this.drinks.juiceMaracuja = [5, this.juiceMaracuja] : this.juiceMaracuja = 0;
      (this.juicePessego > 0) ? this.drinks.juicePessego = [5, this.juicePessego] : this.juicePessego = 0;
      (this.teaLemon > 0) ? this.drinks.teaLemon = [5, this.teaLemon] : this.teaLemon = 0;
      (this.teaOriginal > 0) ? this.drinks.teaOriginal = [5, this.teaOriginal] : this.teaOriginal = 0;
      (this.longHeineken > 0) ? this.drinks.longHeineken = [8, this.longHeineken] : this.longHeineken = 0;
      (this.longBudweiser > 0) ? this.drinks.longBudweiser = [8, this.longBudweiser] : this.longBudweiser = 0;
      (this.tinBrahma > 0) ? this.drinks.tinBrahma = [5, this.tinBrahma] : this.tinBrahma = 0;
      (this.tinSkolPilsen > 0) ? this.drinks.tinSkolPilsen = [5, this.tinSkolPilsen] : this.tinSkolPilsen = 0;
      (this.tinSkolPuroMalte > 0) ? this.drinks.tinSkolPuroMalte = [5, this.tinSkolPuroMalte] : this.tinSkolPuroMalte = 0;
      (this.tinHeineken > 0) ? this.drinks.tinHeineken = [8, this.tinHeineken] : this.tinHeineken = 0;
      (this.tinBudweiser > 0) ? this.drinks.tinBudweiser = [8, this.tinBudweiser] : this.tinBudweiser = 0;
      (this.tinBelaVista > 0) ? this.drinks.tinBelaVista = [8, this.tinBelaVista] : this.tinBelaVista = 0;
      (this.tinDadoBier > 0) ? this.drinks.tinDadoBier = [9, this.tinDadoBier] : this.tinDadoBier = 0
      this.$emit('emitDrinks', this.drinks)
    }
  }
}
</script>

<style>

</style>