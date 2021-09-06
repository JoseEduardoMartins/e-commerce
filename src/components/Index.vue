<template>
  <div class="contaider">
        <center><img class="contaider_logo" src="https://audaces.com/wp-content/themes/Audaces-2018/img/logo.svg"></center>
        <form class="contaider_form" method="post">
            <fieldset>
                <legend> Fazer login</legend>
                <input type="email" name="login" required placeholder="E-mail"> <br>
                <input type="password" name="senha" required placeholder="Senha" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="A senha deve conter 8 ou mais caracteres com pelo menos um número e uma letra maiúscula e minúscula"> <br>
                <a class="forgot_password" href="#"> Esqueceu sua senha? </a>
            </fieldset>
            <a class="register" href="../"> Cadastro </a>
            <button class="enter" type="submit"> Entrar </button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>
:root{
    --azul: #0073cf;
}
* {
    margin: 0;
    padding: 0;
    border: 0;
}
    .contaider{
        border: 2px solid #696969;
        border-radius: 10px;
        width: 500px;
        margin: 60px auto 0px;
        background-color: white;
    }
    .contaider_logo{
        margin-top: 30px;
    }
    .contaider_form{
        width: 300px;
        height: 270px;
        margin: auto;
    }
    fieldset {
        border: solid 0px;
        margin-top: 10px;
    }
    legend {
        color: black;
        margin: 0px auto 20px;
        font-size:  20px;
    }
    input{
        display: block;
        margin: auto;
        border-radius: 3px;
        height: 25px;
        text-align: center;
        width: 270px;
        border: 1px solid #BDBDBD;
    }
    input:focus{
        box-shadow: 0 0 0 0;
        border: 1px solid #6E6E6E;
        outline: 0;
    }
    button{
        padding: 10px 20px 10px;
        background: var(--azul);
        border-radius: 5px;
        border: 0px;
        color: white;
        font-weight: bold;
        margin-left: 130px;
    }
    .register{
        color: var(--azul);
        font-weight: bold;
        text-decoration: none;
        margin-left: 10px;
    }
    .forgot_password{
        font-size: 13px;
        color: var(--azul);
        text-decoration: none;
        font-weight: bold;
        margin-left: 10px;
    }
    .enter{
        cursor: pointer;
    }
</style>
