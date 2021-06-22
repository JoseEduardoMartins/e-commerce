<template>
  <div id="Accompaniments" class="container accompaniments">
    <div class="title">Porções de Batatas</div>
    <div class="container-item">
      <div v-for="Accompaniment in Accompaniments" :key="Accompaniment.name" class="item-product">
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
      Accompaniments: [
        {name: 'Batata de 100g', value: 5, description: 'Porção de 100g de batatas onduladas super crocantes', serve: 1},
        {name: 'Batata de 300g', value: 15, description: 'Porção de 300g de batatas onduladas super crocantes', serve: 3}
      ]
    }
  }
}
</script>

<style>
.container.accompaniments{
  margin: 20px auto 0;
}
</style>
