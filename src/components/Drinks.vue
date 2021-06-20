<template>
  <div id="drinks" class="drinks">
    <div class="title">Bebidas</div>
    <div class="container">
      <div v-for="drink in drinks" :key="drink.name" class="container-drink">
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

<style scoped>
.drinks{
  width: calc(100% - 20px);
  margin: 20px auto 0;
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
  .container-drink{
    width: 90%;
    margin: 10px;
    cursor: pointer;
    display: flex;
    justify-content:space-between;
    border: 1px solid #222222;
  }
  .container-drink:hover{
    border: 1px solid #1C1C1C;
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
    .value{
      text-decoration: underline;
    }
@media (min-width: 500px) {
  .drinks{
    width: calc(100% - 50px);
  }
}
@media (min-width: 700px) {
  .drinks{
      width: calc(100% - 100px);
  }
    .container-drink{
      width: 45%;
    }
}
</style>
