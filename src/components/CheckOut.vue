<template>
    <div class="form_menu third last">
        <div class="title_menu">Finalizar Pedido</div>
        <label>Forma de pagamento:</label>
        <select class="uf" name="estado">
        <option value="dinhiro">Dinheiro</option>
        <option value="cartao">Cartão</option>
        <option value="pix">Pix</option>
        </select>
        <br>
        <button id="enviar">Enviar Pedido</button><br><br>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.form_menu.third.last{
    text-align: center;
}
.uf{
    background-color: #fedf84;
    margin: 30px 0;
}
#enviar{
    border: 1px solid #600107;
    border-radius: 15px;
    padding: 10px;
    color: white;
    background-color: #600107;
    font-size: 15px;
    text-align: right;
}
</style>
