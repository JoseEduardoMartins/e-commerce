<template>
    <footer>
        <div class="item copyright">
            <p class='copyright_paragrafo'>© {{this.currentDate.getFullYear()}} Top Burger - Todos os direitos reservados</p>
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
    background-color: #222222;
    margin-top: 20px;
}
.item.copyright{
    border-top: 3px solid #696969;
    color: white;
    font-size: 12px;
    height: 50px;
    text-align: center;
}
.copyright_paragrafo{
    margin-top: 17px;
}
</style>
