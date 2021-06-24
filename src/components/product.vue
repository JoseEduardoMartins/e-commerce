<template>
  <div id="product" class="product">
    <div class="product_item_first">
        <i class="fas fa-times icon" @click="exitProduct()"></i>
    </div>
    <div class="product_item">
        <div class="item image">
            <img src="../assets/burger.jpg" alt="" class="product_image">
        </div>
        <div class="item info">
            <div class="title">{{produce.name}}</div>
            <div class="description">{{produce.description}}</div>
            <div class="serve" v-if="produce.serve == 1">Serve {{produce.serve}} pessoa</div>
            <div class="serve" v-else>Serve {{produce.serve}} pessoas</div>
            <div class="value">R${{produce.value.toFixed(2)}}</div>
            <div class="bread">
                <div>
                    <div class="title">Pão</div>
                    <div class="sub-title">Escolha 1 opção</div>
                </div>
                <div>
                    <div>
                        <input type="radio">
                        <label>Pão roseta</label>
                    </div>
                    <div>
                        <input type="radio">
                        <label>Pão brioche</label>
                    </div>
                </div>
            </div>
            <div class="additional">
                <div>
                    <div class="title">Adicionais</div>
                    <div class="sub-title">Escolha até 2 opções</div>
                </div>
            </div>
        </div>
    </div>
    <div class="product_item_last">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      produce: this.product
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
        height: calc( 100% - 50px);
        display: flex;
        justify-content:space-around;
        overflow: visible;
    }
    .product_item_first{
        width: 100%;
        height: 50px;
    }
        .item{
            border: 1px solid red;
            width: 50%;
            height: calc(100% - 80px);
        }
            .description, .value{
                margin-left: 20px;
            }
            .serve{
                margin: 20px;
            }
            .sub-title{
                margin-left: 20px;
            }
            .bread{
                border: 1px solid red;
            }
            .additional{
                border: 1px solid red;
            }
        .icon{
            position: absolute;
            top: 15px;
            right: 15px;
            color: gray;
            font-size: 20px;
            cursor: pointer;
        }
        .icon:hover{
            color: #4F4F4F;
        }
        .product_image{
            width: 400px;
            height: 400px;
        }
</style>
