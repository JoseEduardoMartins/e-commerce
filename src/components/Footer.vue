<template>
    <footer>
        <div class="item footer">
            <img src="../assets/subLogo.png" width="700px">
            <div class="title_menu">Atendimento em todo norte da ilha</div>
            <br>
            <strong><div>Taxas gratis para os bairros:</div></strong>
            <ul class="footer_taxas">
                <div>
                    <li>Ingleses</li>
                    <li>Santinho</li>
                </div>
                <div>
                    <li>Vargem do Bom Jesus</li>
                    <li>Rio Vermelho</li>
                </div>
            </ul>
            <br>
            <div>*OUTROS BAIRROS CONSULTAR TAXA</div>
        </div>
        <div class="item copyright">
            <p class='copyright_paragrafo'>© {{this.currentDate.getFullYear()}} Ke Arabe - Todos os direitos reservados</p>
        </div>
    </footer>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style>
footer{
    width: 100%;
    background-color: #fedf84;
    color: #600107;
}
.item.footer{
    position: relative;
    margin: 30px 70px;
    text-align: center;
}
    .footer_taxas{
    display: flex;
    justify-content: space-around;
}
.item.copyright{
    border-top: 3px solid #600107;
    color: #600107;
    font-size: 12px;
    height: 50px;
    text-align: center;
}
.copyright_paragrafo{
    margin-top: 17px;
}
</style>
