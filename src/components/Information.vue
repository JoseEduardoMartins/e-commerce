<template>
  <div class="information">
    <div class="menu">
        <div v-if="compareHour()" class="menu_item">
            <i class="fas fa-circle icon green"></i>
            <div class="menu_item-text">Aberto</div>
        </div>
        <div v-if="!compareHour()" class="menu_item">
            <i class="fas fa-circle icon red"></i>
            <div class="menu_item-text">Fechado</div>
        </div>
        <div class="menu_item">
            <i class="far fa-clock icon gray"></i>
            <div class="menu_item-text">
                <div>Tempo de entrega</div>
                <div>30 - 40 minutos</div>
            </div>
        </div>
        <div class="menu_item">
            <i class="far fa-credit-card icon gray"></i>
            <div class="menu_item-text">Forma de pagamento</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowHour: new Date(),
      days: [
        [0, 19, 23],
        [1, 19, 23],
        [2, 19, 23],
        [3, 19, 23],
        [4, 19, 23],
        [5, 19, 23],
        [6, 19, 23],
        [7, 19, 23]
      ]
    }
  },
  methods: {
    compareHour () {
      for (let i = 0; i < this.days.length; i++) {
        if (this.days[i][0] === this.nowHour.getDay()) {
          if (this.nowHour.getHours() > this.days[i][1] && this.nowHour.getHours() <= this.days[i][2]) {
            return true
          }
        }
      }
      return false
    }
  }
}
</script>

<style scoped>
.information{
    position: relative;
    top: 80px;
    left: 0;
    right: 0;
    margin: auto;
    width: calc(100% - 20px);
    height: 50px;
    background-color: #222222;
    border-radius: 10px;
}
    .menu{
        width: calc(100% - 7px);
        margin: auto;
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
    }
        .menu_item{
            display: flex;
            align-items: center;
        }
        .icon{
            font-size: 20px;
            margin-right: 10px;
        }
        .icon.green{
            color: green;
            font-size: 15px;
        }
        .icon.red{
            color: red;
            font-size: 15px;
        }
        .icon.gray{
            color: #C0C0C0;
        }
        .menu_item-text{
            color: white;
            display: inline;
            font-size: 10px;
        }
@media (min-width: 500px) {
.information{
    width: calc(100% - 50px);
}
.menu{
  width: calc(100% - 50px);
  padding-top: 7px;
}
  .icon{
    font-size: 25px;
    margin-right: 10px;
  }
  .menu_item-text{
    font-size: 12px;
  }
}
@media (min-width: 700px) {
.information{
    width: calc(100% - 100px);
}
  .menu{
      width: calc(100% - 100px);
  }
    .icon{
      font-size: 35px;
    }
    .icon.green{
      font-size: 20px;
    }
    .icon.red{
      font-size: 20px;
    }
    .menu_item-text{
      font-size: 15px;
    }
}
</style>
