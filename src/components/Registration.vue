<template>
  <div class="container">
    <img class="container_logo" src="https://audaces.com/wp-content/themes/Audaces-2018/img/logo.svg">
    <form action="http://localhost:3000/users" method="post">
      <fieldset>
        <legend> Cadastro de Cliente </legend>
        <input type="text" name="nomeCompleto" required pattern="[a-zA-z]*" title="É possivel apenas utilização de letras!" placeholder="Nome Completo">
        <input type="text" name="nomeEmpresa" required placeholder="Nome da Empresa"> <br>
        <input type="text" name="cpf" minlength="11" required maxlength="14" placeholder="CPF"  pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"  title="Digite um CPF no formato: xxx.xxx.xxx-xx">
        <input type="text" name="numeroTelefone" required minlength="11" maxlength="14" placeholder="Telefone"  pattern="[0-9]{2} ?[0-9]{5}-?[0-9]{4}"  title="Digite um numero de telefone no formato: xx xxxxx-xxxx"> <br>
        <input type="email" name="email" required class="email" placeholder="E-mail"> <br>
        <input type="password" name="senha" required minlength="8" placeholder="Senha" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="A senha deve conter 8 ou mais caracteres com pelo menos um número e uma letra maiúscula e minúscula">
        <input type="password" name="confirmarSenha" required minlength="8" placeholder="Confirmar Senha" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="A senha deve conter 8 ou mais caracteres com pelo menos um número e uma letra maiúscula e minúscula">
        <br><br>
        <a class="login_back" href="../index.html"> Voltar para pagina de login </a>
        <button onclick="" type="submit" name="cadastrar"> Cadastrar </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    border: 2px solid #696969;
    border-radius: 10px;
    width: 800px;
    height: 420px;
    margin-top: 60px;
    margin: 60px auto 0px;
}
.container_logo{
    margin: 30px 30px 10px;
}
fieldset {
    border: solid 0px;
    display: inline;
    margin-left: 30px;
    position: relative;
    border-right: 1px solid #696969;
}
legend {
    color: black;
    margin: 0px 0px 20px;
    font-size:  20px;
}
input{
    border: 1px solid #696969;
    border-radius: 3px;
    height: 25px;
    width: 204px;
    text-align: center;
    margin-bottom: 20px;
    margin-right: 30px;
}
.email{
    width: 440px;
}
.error{
    color: red;
    font-weight: bold;
    display: block;
    margin-left: 32px;
    margin-top: -50px;
}
.login_back{
    color: var(--azul);
    font-weight: bold;
    text-decoration: none;
}
button{
    padding: 10px;
    background: var(--azul);
    border-radius: 5px;
    border: 0px;
    color: white;
    font-weight: bold;
    position: absolute;
    right: 33px;
    bottom: -1px;
    cursor: pointer;
}
</style>
