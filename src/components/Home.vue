<template>
    <form>
      <div v-for="product in arrayProducts" :key="product.idcss">
        <PanelProducts @openProduct="openProduct" :product="product"/>
      </div>
      <div v-if="visibilityProduct">
        <Product @closeProduct="closeProduct" @setProduct="setProduct" :product="product"/>
      </div>
    </form>
</template>

<script>
import PanelProducts from '@/components/PanelProducts.vue'
import Product from '@/components/Product.vue'
export default {
  data () {
    return {
      arrayProducts: [
        {
          idCss: 'burgers',
          classCss: 'container burgers',
          name: 'Burgers',
          products: [
            {
              name: 'BURGER',
              description: '(pão roseta ou brioche, hambúrguer artesanal 150g, queijo mussarela e maionese da casa)',
              serve: 1,
              value: 14,
              total: 14,
              amount: 1,
              choice: [
                {
                  name: 'Pão',
                  description: 'Escolha 1 opções',
                  type: 'option',
                  itens: [
                    {
                      name: 'Pão brioche',
                      description: '',
                      value: ''
                    },
                    {
                      name: 'Pão rosera',
                      description: '',
                      value: ''
                    }
                  ]
                },
                {
                  name: 'Adicional',
                  description: 'Escolha 1 opções',
                  type: 'additional',
                  itens: [
                    {
                      name: 'Bacon',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Cheddar',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Hambúrguer Artesanal de 150g',
                      value: 7,
                      amount: 0
                    }
                  ]
                }
              ]
            },
            {
              name: 'CHEDDAR BURGER',
              description: '(pão roseta ou brioche, hambúrguer artesanal 150g, cheddar cremoso, queijo mussarela, cebola roxa e maionese da casa)',
              serve: 1,
              value: 16,
              total: 16,
              amount: 1,
              choice: [
                {
                  name: 'Pão',
                  description: 'Escolha 1 opções',
                  type: 'option',
                  itens: [
                    {
                      name: 'Pão brioche',
                      description: ''
                    },
                    {
                      name: 'Pão rosera',
                      description: ''
                    }
                  ]
                },
                {
                  name: 'Adicional',
                  description: 'Escolha 1 opções',
                  type: 'additional',
                  itens: [
                    {
                      name: 'Bacon',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Cheddar',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Hambúrguer Artesanal de 150g',
                      value: 7,
                      amount: 0
                    }
                  ]
                }
              ]
            },
            {
              name: 'SALADA BURGER',
              description: '(pão roseta ou brioche, hambúrguer artesanal 150g, queijo mussarela, alface americano, tomate, cebola roxa e maionese da casa)',
              serve: 1,
              value: 17,
              total: 17,
              amount: 1,
              choice: [
                {
                  name: 'Pão',
                  description: 'Escolha 1 opções',
                  type: 'option',
                  itens: [
                    {
                      name: 'Pão brioche',
                      description: ''
                    },
                    {
                      name: 'Pão rosera',
                      description: ''
                    }
                  ]
                },
                {
                  name: 'Adicional',
                  description: 'Escolha 1 opções',
                  type: 'additional',
                  itens: [
                    {
                      name: 'Bacon',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Cheddar',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Hambúrguer Artesanal de 150g',
                      value: 7,
                      amount: 0
                    }
                  ]
                }
              ]
            },
            {
              name: 'EGG BURGER',
              bread: ['Pão brioche', 'Pão rosera'],
              description:
              '(pão roseta ou brioche, hambúrguer artesanal 150g, ovo frito, queijo mussarela, alface americano, tomate e maionese da casa)',
              serve: 1,
              value: 18,
              total: 18,
              amount: 1,
              choice: [
                {
                  name: 'Pão',
                  description: 'Escolha 1 opções',
                  type: 'option',
                  itens: [
                    {
                      name: 'Pão brioche',
                      description: ''
                    },
                    {
                      name: 'Pão rosera',
                      description: ''
                    }
                  ]
                },
                {
                  name: 'Adicional',
                  description: 'Escolha 1 opções',
                  type: 'additional',
                  itens: [
                    {
                      name: 'Bacon',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Cheddar',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Hambúrguer Artesanal de 150g',
                      value: 7,
                      amount: 0
                    }
                  ]
                }
              ]
            },
            {
              name: 'BACON BURGER',
              description: '(pão roseta ou brioche, hambúrguer artesanal 150g, bacon, cheddar cremoso, queijo mussarela, alface americano, tomate, cebola roxa e maionese da casa)',
              serve: 1,
              value: 21,
              total: 21,
              amount: 1,
              choice: [
                {
                  name: 'Pão',
                  description: 'Escolha 1 opções',
                  type: ' ',
                  itens: [
                    {
                      name: 'Pão brioche',
                      description: ''
                    },
                    {
                      name: 'Pão rosera',
                      description: ''
                    }
                  ]
                },
                {
                  name: 'Adicional',
                  description: 'Escolha 1 opções',
                  type: 'additional',
                  itens: [
                    {
                      name: 'Bacon',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Cheddar',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Hambúrguer Artesanal de 150g',
                      value: 7,
                      amount: 0
                    }
                  ]
                }
              ]
            },
            {
              name: 'TOP BURGER',
              description: '(pão roseta ou brioche, hambúrguer artesanal 200g, bacon, ovo frito, cheddar cremoso, queijo mussarela, alface americano, tomate, cebola roxa e maionese da casa)',
              serve: 1,
              value: 25,
              total: 25,
              amount: 1,
              choice: [
                {
                  name: 'Pão',
                  description: 'Escolha 1 opções',
                  type: 'option',
                  itens: [
                    {
                      name: 'Pão brioche',
                      description: ''
                    },
                    {
                      name: 'Pão rosera',
                      description: ''
                    }
                  ]
                },
                {
                  name: 'Adicional',
                  description: 'Escolha 1 opções',
                  type: 'additional',
                  itens: [
                    {
                      name: 'Bacon',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Cheddar',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Hambúrguer Artesanal de 150g',
                      value: 7,
                      amount: 0
                    }
                  ]
                }
              ]
            },
            {
              name: 'DOUBLE CHEDDAR',
              description: '(pão roseta ou brioche, 2 hambúrguer artesanal de 100g cada, cheddar cremoso e maionese da casa)',
              serve: 1,
              value: 20,
              total: 20,
              amount: 1,
              choice: [
                {
                  name: 'Pão',
                  description: 'Escolha 1 opções',
                  type: 'option',
                  itens: [
                    {
                      name: 'Pão brioche',
                      description: ''
                    },
                    {
                      name: 'Pão rosera',
                      description: ''
                    }
                  ]
                },
                {
                  name: 'Adicional',
                  description: 'Escolha 1 opções',
                  type: 'additional',
                  itens: [
                    {
                      name: 'Bacon',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Cheddar',
                      value: 4,
                      amount: 0
                    },
                    {
                      name: 'Hambúrguer Artesanal de 150g',
                      value: 7,
                      amount: 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          idCss: 'accompaniments',
          classCss: 'container accompaniments',
          name: 'Porções de Batatas',
          products: [
            {
              name: 'Batata de 100g',
              description: 'Porção de 100g de batatas onduladas super crocantes',
              serve: 1,
              amount: 1,
              value: 5,
              total: 5
            },
            {
              name: 'Batata de 300g',
              description: 'Porção de 300g de batatas onduladas super crocantes',
              serve: 3,
              amount: 1,
              value: 15,
              total: 15
            }
          ]
        },
        {
          idCss: 'drinks',
          classCss: 'container drinks',
          name: 'Bebidas',
          products: [
            {
              name: 'Refrigerante 1,5l',
              value: 10,
              total: 0,
              serve: 0,
              description: '',
              choice: [
                {
                  name: 'Refrigerante 1,5l',
                  description: 'Escolha no maximo 10 opções',
                  type: 'additional',
                  itens: [
                    {
                      name: 'Coca-Cola 1,5l',
                      description: '',
                      value: 10.00,
                      amount: 0
                    },
                    {
                      name: 'Coca-Cola Zero 1,5l',
                      description: '',
                      value: 10.00,
                      amount: 0
                    },
                    {
                      name: 'Pureza 1,5l',
                      description: '',
                      value: 10.00,
                      amount: 0
                    }
                  ]
                }
              ]
            },
            {
              name: 'Refrigerante lata',
              value: 5,
              total: 0,
              serve: 0,
              description: '',
              choice: [
                {
                  name: 'Refrigerante lata',
                  description: 'Escolha no maximo 10 opções',
                  type: 'additional',
                  itens: [
                    {
                      name: 'Coca-Cola 310ml',
                      description: '',
                      value: 5.00,
                      amount: 0
                    },
                    {
                      name: 'Coca-Cola Zero 350ml',
                      description: '',
                      value: 5.00,
                      amount: 0
                    },
                    {
                      name: 'Guaraná Antartica 350ml',
                      description: '',
                      value: 5.00,
                      amount: 0
                    },
                    {
                      name: 'Sprite 350ml',
                      description: '',
                      value: 5.00,
                      amount: 0
                    }
                  ]
                }
              ]
            },
            {
              name: 'Cerveja',
              value: 3,
              total: 0,
              serve: 0,
              description: '',
              choice: [
                {
                  name: 'Cerveja',
                  description: 'Escolha no maximo 10 opções',
                  type: 'additional',
                  itens: [
                    {
                      name: 'Brahma lata 350ml',
                      description: '',
                      value: 5.00,
                      amount: 0
                    },
                    {
                      name: 'Heineken Long 350ml',
                      description: '',
                      value: 8.00,
                      amount: 0
                    },
                    {
                      name: 'Budweiser Long 350ml',
                      description: '',
                      value: 8.00,
                      amount: 0
                    }
                  ]
                }
              ]
            },
            {
              name: 'Água',
              value: 3,
              serve: 0,
              total: 0,
              description: '',
              choice: [
                {
                  name: 'Água',
                  description: 'Escolha no maximo 10 opções',
                  type: 'additional',
                  itens: [
                    {
                      name: '500ml com gás',
                      description: '',
                      value: 3.00,
                      amount: 0
                    },
                    {
                      name: '500ml sem gás',
                      description: '',
                      value: 3.00,
                      amount: 0
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      visibilityProduct: false
    }
  },
  methods: {
    openProduct (data) {
      document.documentElement.style.overflow = 'hidden'
      this.visibilityProduct = !this.visibilityProduct
      this.product = data
    },
    closeProduct (data) {
      document.documentElement.style.overflow = 'auto'
      this.visibilityProduct = data
    },
    setProduct (data) {
      this.$emit('addProduct', data)
    }
  },
  components: {
    PanelProducts,
    Product
  }
}
</script>
