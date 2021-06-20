<template>
  <div id="Accompaniments" class="Accompaniments">
    <div class="title">Porções de Batatas</div>
    <div class="container">
      <div v-for="Accompaniment in Accompaniments" :key="Accompaniment.name" class="container-Accompaniment">
        <div class="Accompaniment item">
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
        <div class="Accompaniment image">
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

<style scoped>
.Accompaniments{
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
  .container-Accompaniment{
    width: 90%;
    margin: 10px;
    cursor: pointer;
    display: flex;
    justify-content:space-between;
    border: 1px solid #222222;
  }
  .container-Accompaniment:hover{
    border: 1px solid #1C1C1C;
  }
    .Accompaniment.item{
      display: flex;
      flex-wrap: wrap;
      align-content:space-between;
    }
    .Accompaniment.image{
      margin-left: 10px;
    }
    .burger.image{
      margin-left: 10px;
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
  .Accompaniments{
    width: calc(100% - 50px);
  }
}
@media (min-width: 700px) {
  .Accompaniments{
      width: calc(100% - 100px);
  }
    .container-Accompaniment{
      width: 45%;
    }
}
</style>
