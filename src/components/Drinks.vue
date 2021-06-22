<template>
  <div id="drinks" class="container drinks">
    <div class="title">Bebidas</div>
    <div class="container-item">
      <div v-for="drink in drinks" :key="drink.name" class="item-product">
        <div>
            <div class="sub-title">{{drink.name}}</div>
            <div class="value">A partir de R${{drink.value.toFixed(2)}}</div>
        </div>
        <div>
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
      drinks: [
        {name: 'Refrigerante 1,5l', value: 10},
        {name: 'Refrigerante lata', value: 5},
        {name: 'Cerveja', value: 3},
        {name: 'Água', value: 3}
      ]
    }
  }
}
</script>

<style>
.container.drinks{
  margin: 20px auto 0;
}
</style>
