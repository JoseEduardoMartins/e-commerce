<template>
  <div id="information" class="information">
    <div class="menu">
        <div class="menu_item" @mouseover="tableHour()" @mouseout="tableHour()">
          <i class="fas fa-circle icon green" v-if="compareHour()"></i>
          <div class="menu_item-text" v-if="compareHour()">Aberto</div>
          <i class="fas fa-circle icon red" v-if="!compareHour()"></i>
          <div class="menu_item-text" v-if="!compareHour()">Fechado</div>
        </div>
          <div class="menu_item-Hour" v-if="hour">
            <table class="item-Hour">
              <tr v-for="day in days" :key="day[0]">
                <td>{{day[1]}} - </td>
                <td>{{day[2]}}:00 às </td>
                <td> {{day[3]}}:00</td>
              </tr>
            </table>
            <div class="item-Hour-text">Horario de brasilia</div>
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
          <select class="menu_item-text">
            <option disabled selected>Forma de pagamento</option>
            <option value="money">Dinheiro</option>
            <option value="card">Cartão</option>
          </select>
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
        [0, 'DOM', 19, 23],
        [1, 'SEG', 19, 23],
        [2, 'TER', 19, 23],
        [3, 'QUA', 19, 23],
        [4, 'QUI', 19, 23],
        [5, 'SEX', 19, 23],
        [6, 'SAB', 19, 23]
      ],
      hour: false
    }
  },
  methods: {
    compareHour () {
      for (let i = 0; i < this.days.length; i++) {
        if (this.days[i][0] === this.nowHour.getDay()) {
          if (this.nowHour.getHours() > this.days[i][2] && this.nowHour.getHours() <= this.days[i][3]) {
            return true
          }
        }
      }
      return false
    },
    tableHour () {
      if (this.hour === false) {
        this.hour = true
      } else {
        this.hour = false
      }
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
            flex-wrap:wrap;
        }
        .menu_item-Hour{
          position: absolute;
          top: 40px;
          left: 0;
          border: 1px solid white;
          border-radius: 5px;
          background-color: #222222;
          color: white;
        }
          .item-Hour{
            padding: 10px;
          }
          .item-Hour-text{
            text-align: center;
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
            background-color: #222222;
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
