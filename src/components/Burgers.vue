<template>
  <div id="burgers" class="container">
    <div class="title">Burgers</div>
    <div class="container-item">
      <div v-for="burger in burgers" :key="burger.name" class="item-product">
        <div class="product item">
          <div>
            <div class="sub-title">{{burger.name}}</div>
            <div class="description">{{burger.description}}</div> <br>
          </div>
          <div>
            <div class="serve" v-if="burger.serve == 1">Serve {{burger.serve}} pessoa</div>
            <div class="serve" v-else>Serve {{burger.serve}} pessoas</div><br>
            <div class="value">R${{burger.value.toFixed(2)}}</div>
          </div>
        </div>
        <div class="product image">
          <img src="../assets/burger.jpg" alt="imagem do prato" class="image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      burgers: [
        {name: 'BURGER', value: 14, description: '(pão roseta ou brioche, hambúrguer artesanal 150g, queijo mussarela e maionese da casa)', serve: 1},
        {name: 'CHEDDAR BURGER', value: 16, description: '(pão roseta ou brioche, hambúrguer artesanal 150g, cheddar cremoso, queijo mussarela, cebola roxa e maionese da casa)', serve: 1},
        {name: 'SALADA BURGER', value: 17, description: '(pão roseta ou brioche, hambúrguer artesanal 150g, queijo mussarela, alface americano, tomate, cebola roxa e maionese da casa)', serve: 1},
        {name: 'EGG BURGER', value: 18, description: '(pão roseta ou brioche, hambúrguer artesanal 150g, ovo frito, queijo mussarela, alface americano, tomate e maionese da casa)', serve: 1},
        {name: 'BACON BURGER', value: 21, description: '(pão roseta ou brioche, hambúrguer artesanal 150g, bacon, cheddar cremoso, queijo mussarela, alface americano, tomate, cebola roxa e maionese da casa)', serve: 1},
        {name: 'TOP BURGER', value: 25, description: '(pão roseta ou brioche, hambúrguer artesanal 200g, bacon, ovo frito, cheddar cremoso, queijo mussarela, alface americano, tomate, cebola roxa e maionese da casa)', serve: 1},
        {name: 'DOUBLE CHEDDAR', value: 20, description: '(pão roseta ou brioche, 2 hambúrguer artesanal de 100g cada, cheddar cremoso e maionese da casa)', serve: 1}
      ]
    }
  }
}
</script>
