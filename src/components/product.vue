<template>
  <div id="product" class="product">
    <div class="product_item first">
        <img src="../assets/burger.jpg" alt="" class="product_image">
    </div>
    <div class="product_item second">
        <div class="second_header">
            <div class="header_title">{{produce.name}}</div>
            <i class="fas fa-times header_icon" @click="exitProduct()"></i>
        </div>
        <div class="second_body">
            <div class="body">
                <div class="body_description info">{{produce.description}}</div>
                <div class="body_serve info" v-if="produce.serve == 1">Serve {{produce.serve}} pessoa</div>
                <div class="body_serve info" v-else>Serve {{produce.serve}} pessoas</div>
                <div class="body_value info">R${{produce.value.toFixed(2)}}</div>
                <div class="body_item main">
                    <div class="body_container">
                        <div class="container_title">Pão</div>
                        <div class="container_sub-title">Escolha 1 opção.</div>
                    </div>
                </div>
                <div v-for="product in produce.bread" :key="product[0]" class="body_item">
                    <div class="bread">
                        <label class="container_title">{{product[0]}}</label>
                        <input class="bread_input" type="radio" v-model="bread" :value="product[0]">
                    </div>
                </div>
                <div class="body_item main">
                    <div class="body_container">
                        <div class="container_title">Adicionais</div>
                        <div class="container_sub-title">Escolha até 2 opções.</div>
                    </div>
                </div>
                <div v-for="product in produce.additional" :key="product[0]" class="body_item ">
                    <div class="body_container">
                        <div class="container_title">{{product[0]}}</div>
                        <div class="container_sub-title">+R${{product[1].toFixed(2)}}</div>
                        <input class="container_number additional" v-model.number="product[2]" type="number" max="2" min="0">
                    </div>
                </div>
                <div>
                    <div>Algum comentário?</div>
                    <textarea class="comment" cols="30" rows="10" maxlength="140" v-model="comment" placeholder="Ex: tirar tomate, alface etc."></textarea>
                </div>
            </div>
            <div class="body_footer">
                <input class="container_number" v-model.number="amount" type="number" min="0">
                <div class="footer_add">
                    <div class="footer_add_text">Adicionar</div>
                    <div class="footer_add_text">R${{produce.value.toFixed(2)}}</div>
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
      comment: '',
      bread: '',
      amount: 0
    }
  },
  methods: {
    exitProduct () {
      this.$emit('closeProduct', false)
    }
  },
  props: {
    product: Object
  }
}
</script>

<style scoped>
.product{
    display: flex;
    justify-content:space-around;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: calc(100% - 100px);
    height: calc(100% - 50px);
    border: 1px solid gray;
    border-radius: 10px;
    background-color: white;
    z-index: 998;
}
    .product_item{
        width: 50%;
        height: 100%;
        position: relative;
    }
        .product_image{
            width: 450px;
            height: 450px;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
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
                            border: 1px solid gray;
                            font-size: 20px;
                            padding:6px;
                            color: gray;
                            width: 100px;
                            top: 20px;
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
                .comment{
                    width: calc(100% - 10px);
                    height: 80px;
                    margin-top: 10px;
                    margin-bottom: 10px;
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
                right: 20px;
                width: 250px;
                cursor: pointer;
                text-align: justify;
                background-color: #d26d34;
                border-radius: 5px;
                color: white;
                display: flex;
                justify-content:space-around;
            }
            .footer_add_text{
                padding: 10px;
                font-weight: bold;
            }
</style>
