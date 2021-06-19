<template>
  <div id="burgers" class="burgers">
    <div class="title">Burgers</div>
    <div class="container">
      <div v-for="burger in burgers" :key="burger.name" class="container-burger">
        <div class="burger-item">
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

<style scoped>
.burgers{
  width: calc(100% - 20px);
  margin: 95px auto 0;
  background-color: #222222;
  border-radius: 10px;
  color: white;
}
  .title{
    font-size: 25px;
    font-weight: bold;
    padding: 20px;
  }
  .container{
    width: calc(100% - 40px);
    margin: auto;
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
  }
  .container-burger{
    width: 90%;
    margin: 10px;
    cursor: pointer;
    display: flex;
    justify-content:space-between;
    border: 1px solid #222222;
  }
  .container-burger:hover{
    border: 1px solid #1C1C1C;
  }
    .burger-item{
      border: 1px solid red;
      display: flex;
      flex-wrap: wrap;
      align-content:space-between;
    }
    .sub-title{
      margin-bottom: 10px;
      font-weight: bold;
    }
    .image{
      width: 120px;
      height: 120px;
      border-radius: 10px;
    }
    .serve{
      font-size: 15px;
      font-weight: bold;
    }
    .value{
      text-decoration: underline;
    }
    .description{
      font-size: 15px;
    }
@media (min-width: 500px) {
  .burgers{
    width: calc(100% - 50px);
  }
}
@media (min-width: 700px) {
  .burgers{
      width: calc(100% - 100px);
  }
    .container-burger{
      width: 45%;
    }
}
</style>
