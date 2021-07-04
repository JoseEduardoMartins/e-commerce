<template>
  <div id="product" class="product">
    <div class="product_item first">
        <img src="../assets/burger.jpg" alt="" class="product_image">
         <i class="fas fa-times header_icon cell" @click="exitProduct()"></i>
    </div>
    <div class="product_item second">
        <div class="second_header">
            <div class="header_title">{{produce.name}}</div>
            <i class="fas fa-times header_icon computer" @click="exitProduct()"></i>
        </div>
        <div class="second_body">
            <div class="body">
                <div class="body_description info" v-if="produce.description !== ''">{{produce.description}}</div>
                <div v-if="produce.serve !== 0">
                  <div class="body_serve info" v-if="produce.serve == 1">Serve {{produce.serve}} pessoa</div>
                  <div class="body_serve info" v-else>Serve {{produce.serve}} pessoas</div>
                </div>
                <div class="body_value info">R${{produce.value.toFixed(2)}}</div>
                <div v-for="choice in produce.choice"  :key="choice.name">
                  <div v-if="choice.type == 'option'">
                    <div class="body_item main">
                      <div class="body_container">
                        <div class="container_title">{{choice.name}}</div>
                        <div class="container_sub-title">{{choice.description}}</div>
                      </div>
                    </div>
                    <div v-for="item in choice.itens" :key="item.name" class="body_item ">
                      <div class="bread">
                        <label class="container_title">{{item.name}}</label>
                        <div class="container_title" v-if="item.description !== ''">{{item.description}}</div>
                        <input class="bread_input" type="radio" v-model="choice.option" name="option" :value="item.name">
                      </div>
                    </div>
                  </div>
                  <div v-if="choice.type == 'additional'">
                    <div class="body_item main">
                      <div class="body_container">
                        <div class="container_title">{{choice.name}}</div>
                        <div class="container_sub-title">{{choice.description}}</div>
                      </div>
                    </div>
                    <div v-for="item in choice.itens" :key="item.name" class="body_item ">
                      <div class="body_container">
                        <div class="container_title">{{item.name}}</div>
                        <div class="container_title" v-if="item.description !== ''">{{item.description}}</div>
                        <div class="container_sub-title">+R${{item.value.toFixed(2)}}</div>
                        <input class="container_number additional" @click="addTotal(item.value, item.amount)" v-model.number="item.amount" type="number" max="2" min="0">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="body_comment">
                    <div class="comment_title">Algum comentário?</div>
                    <textarea class="comment" cols="30" rows="10" maxlength="140" v-model="produce.comment" placeholder="Ex: tirar tomate, alface etc."></textarea>
                </div>
            </div>
            <div class="body_footer">
                <input class="container_number plus" type="number" min="1" @click="addTotal()" v-if="produce.amount !== undefined" v-model.number="produce.amount">
                <div class="footer_add" @click="addProduct()">
                    <div class="footer_add_text">Adicionar</div>
                    <div class="footer_add_text">R${{produce.total.toFixed(2)}}</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      produce: this.product,
      amount: 0
    }
  },
  methods: {
    exitProduct () {
      this.$emit('closeProduct', false)
    },
    submitProduct () {
      if (this.produce.total > 0) {
        this.$emit('setProduct', this.produce)
        this.exitProduct()
      } else {
        alert('Certifique que você selecionou algo..')
      }
    },
    addProduct () {
      if (this.produce.choice !== undefined) {
        for (let i = 0; i < this.produce.choice.length; i++) {
          if (this.produce.choice[i].type === 'option') {
            (this.produce.choice[i].option !== '') ? this.submitProduct() : alert('Selecione todos itens obrigatorios.')
            break
          } else if (this.produce.choice[i].type === 'additional') {
            this.submitProduct()
          }
        }
      } else {
        this.submitProduct()
      }
    },
    addTotal () {
      (this.produce.amount !== undefined) ? this.produce.total = this.produce.value : this.produce.total = 0
      if (this.produce.choice !== undefined) {
        for (let i = 0; i < this.produce.choice.length; i++) {
          if (this.produce.choice[i].type === 'additional') {
            for (let j = 0; j < this.produce.choice[i].itens.length; j++) {
              this.produce.total += this.produce.choice[i].itens[j].value * this.produce.choice[i].itens[j].amount
            }
          }
        }
      }
      if (this.produce.amount !== undefined) {
        this.produce.total *= this.produce.amount
      }
    }
  },
  props: {
    product: Object
  }
}
</script>

<style scoped>
.product{
  position: fixed;
  top: 0; bottom: 0; left: 0; right: 0;
  margin: auto;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  display: flex;
  flex-direction:column;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;
  z-index: 998;
}
  .product_item{
    width: 100%;
    position: relative;
  }
  .product_item.first{
    height: 40%;
  }
  .product_item.second{
    height: 60%;
  }
  .product_image{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 200px;
    height: 200px;
  }
  .second_header{
    width: 100%;
    height: 50px;
  }
    .header_title{
        font-size: 25px;
        font-weight: bold;
        margin: 10px;
        color: #4F4F4F;
    }
    .header_icon{
      position: absolute;
      top: 15px;
      right: 15px;
      color: gray;
      font-size: 20px;
      cursor: pointer;
    }
    .header_icon:hover{
      color: #4F4F4F;
    }
        .computer{
            visibility: hidden;
        }
  .second_body{
    height: calc(100% - 60px);
    position: relative;
  }
    .body{
      position: absolute;
      width: 100%;
      height: calc(100% - 70px);
      overflow-y: scroll;
    }
      .info{
        margin-left: 10px;
      }
      .body_description, .body_serve{
        font-size: 15px;
        color: gray;
      }
      .body_serve, .body_value{
        margin-top: 10px;
        font-weight: bold;
      }
      .body_value{
        color: #4F4F4F;
      }
      .body_item{
        width: calc(100%-1);
        height: 60px;
        position: relative;
      }
      .body_item.main{
        background-color: #DCDCDC;
        opacity: 0.8;
        margin-top: 10px;
      }
        .body_container{
            padding: 10px;
        }
            .container_title{
                color: black;
            }
            .bread{
                padding: 20px 10px;
            }
                .bread_input{
                    position: absolute;
                    top: 23px;
                    right: 10px;
                }
            .container_sub-title{
                color: #4F4F4F;
            }
            .container_number{
                position: absolute;
                top: 20px;
                padding:6px;
                font-size: 20px;
                color: gray;
                border: 1px solid gray;
            }
            .container_number.plus{
                width: 80px;
                left: 10px;
            }
            .container_number.additional{
                width: 70px;
                right: 10px;
            }
            .container_number::-webkit-inner-spin-button {
                all: unset;
                min-width: 21px;
                min-height: 45px;
                margin: 17px;
                padding: 0px;
                background-image:
                linear-gradient(to top, transparent 0px, transparent 16px, #fff 16px, #fff 26px, transparent 26px, transparent 35px, gray 35px,gray 36px,transparent 36px, transparent 40px),
                linear-gradient(to right, transparent 0px, transparent 10px, gray 10px, gray 11px, transparent 11px, transparent 21px);
                transform: rotate(90deg) scale(0.8, 0.9);
                cursor:pointer;
            }
    .body_comment{
      margin-top: 10px;
    }
    .comment_title{
        margin-left: 10px;
    }
    .comment{
        width: calc(100% - 20px);
        height: 80px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        border: 1px solid gray;
        color: #4F4F4F;
        padding-top: 20px;
        padding-left: 20px;
        box-sizing: border-box;
    }
    .comment:focus, .container_number{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        border: 1px solid gray;
    }
    .body_footer{
        position: absolute;
        width: 100%;
        height: 70px;
        bottom: 0;
    }
    .footer_add{
        position: absolute;
        top: 20px;
        right: 10px;
        width: calc( 100% - 120px);
        cursor: pointer;
        text-align: justify;
        background-color: #d26d34;
        border-radius: 5px;
        color: white;
        display: flex;
        justify-content:space-around;
    }
    .footer_add_text{
        padding: 10px 0;
        font-weight: bold;
    }
@media (min-width: 500px) {
  .product{
    width: calc(100% - 50px);
    height: calc(100% - 25px);
  }
  .footer_add{
        width: 250px;
    }
}
@media (min-width: 700px) {
  .product{
    width: calc(100% - 100px);
    height: calc(100% - 50px);
  }
}
@media (min-width: 900px) {
  .product{
    justify-content:space-around;
    flex-direction:initial;
  }
    .cell{
        visibility: hidden;
    }
    .computer{
        visibility: visible;
    }
    .product_item{
      width: 50%;
    }
    .product_item.first{
      height: 100%;
    }
    .product_item.second{
      height: 100%;
    }
    .product_image{
      width: 350px;
      height: 350px;
    }
    .container_number.plus{
      left: 0px;
    }
}
@media (min-width: 1100px) {
    .product_image{
      width: 450px;
      height: 450px;
    }
}
</style>
