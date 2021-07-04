<template>
    <div class="form_menu third">
        <div class="title_menu">Endereço</div>

        <div class="item_address">
            <div>
                <label>Cep:</label>
                <input class="address" type="text" pattern= "\d{5}-?\d{3}" title="Digite um CEP no formato: xxxxx-xxx" v-model="cep"><br><br>

                <label>Cidade:</label>
                <input class="address" type="text" v-model="city">
            </div>
            <div>
                <label>Bairro:</label>
                <input class="address" type="text" v-model="district"><br><br>

                <label>Rua:</label>
                <input class="address" type="text" v-model="street">
            </div>
            <div>
                <label>Numero:</label>
                <input class="address" type="text" v-model="number" required><br><br>

                <label>Complemento:</label>
                <input class="address" type="text" v-model="complement" required>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      cep: '',
      city: '',
      district: '',
      street: '',
      number: '',
      complement: '',
      arrayAddress: [],
      verification: true
    }
  },
  methods: {
    emitAddress (data) {
      if (this.arrayAddress !== undefined) {
        if (this.addAddres) {
          this.$emit('emitBlur', data)
        }
      }
    },
    addAddres () {
      (this.cep !== '') ? this.arrayAddress.push(this.cep) : this.verification = false;
      (this.city !== '') ? this.arrayAddress.push(this.city) : this.verification = false;
      (this.district !== '') ? this.arrayAddress.push(this.district) : this.verification = false;
      (this.street !== '') ? this.arrayAddress.push(this.street) : this.verification = false;
      (this.number !== '') ? this.arrayAddress.push(this.number) : this.verification = false;
      (this.complement !== '') ? this.arrayAddress.push(this.complement) : this.verification = false
      return this.verification
    }
  }
}
</script>

<style>
.form_menu.third{
    margin: 15px auto 0;
}
.item_address{
    margin: 30px 0;
    display: column;
}
.address{
    background-color: #fedf84;
    border: 1px solid #600107;
    font-size: 14px;
}
@media (min-width: 800px){
  .item_address{
    display: flex;
    justify-content: space-around;
}
}
</style>
