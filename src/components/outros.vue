<template>
    <div>
        <div class="form_menu second">
            <div class="title_menu">Bebidas</div>
            <ul class="item_list second">
                <div class="item_list second itens">
                    <div>
                        <li class="title_list">Água:</li>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Com gás R$3,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Sem gás R$3,00</dd>
                    </div>
                    <div>
                        <li class="title_list">Refrigerante lata</li>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Coca-Cola R$5,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Coca-Cola Zero R$5,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Guaraná R$5,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Sprite R$5,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Schweppes Citrus R$5,00</dd>
                    </div>
                    <div>
                        <li class="title_list">Refrigerante 1 litro</li>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Pureza R$8,00</dd>
                    </div>
                    <div>
                        <li class="title_list">Refrigerante 1,5 litros</li>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Coca-Cola R$8,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Guaraná R$8,00</dd>
                    </div>
                </div>
                <div class="item_list second itens">
                    <div>
                        <li class="title_list">Suco 290ml</li>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Del valle Maracujá R$5,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Del valle Pêssego R$5,00</dd>
                    </div>
                    <div>
                        <li class="title_list">Chá 450ml</li>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Matte Leão limão R$5,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Matte Leão original R$5,00</dd>
                    </div>
                    <div>
                        <li class="title_list">Cerveja Long neck</li>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Heineken R$8,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Budweiser R$8,00</dd>
                    </div>
                    <div>
                        <li class="title_list">Cerveja lata</li>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Brahma R$5,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Skol Pilsen R$5,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Skol Puro Malte R$5,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Heineken R$8,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Budweiser R$8,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Bela Vista R$8,00</dd>
                        <dd><input type="number" class="quantidade bebidas" value="0" min="0"> Dado Bier R$6,00</dd>
                    </div>
                </div>
            </ul>
        </div>
        <div class="form_menu third">
            <div class="title_menu">Endereço</div>

            <div class="item_endereco">
                <div>
                    <label>Cep:</label>
                <input id="cep" type="text" on:keyup="buscar" class="endereco" pattern= "\d{5}-?\d{3}" title="Digite um CEP no formato: xxxxx-xxx" ><br><br>

                <label>Cidade:</label>
                <input id="cidade" type="text" class="endereco">
                </div>
                <div>
                    <label>Bairro:</label>
                    <input id="bairro" type="text" class="endereco"><br><br>
                    <label>Rua:</label>
                    <input id="rua" type="text" class="endereco">
                </div>
                <div>
                    <label>Numero da sua casa:</label>
                    <input id="numero" type="text" class="endereco" required><br><br>
                    <label>Complemento:</label>
                    <input id="complemento" type="text" class="endereco" required>
                </div>
            </div>
        </div>
        <div class="form_menu third last">
            <div class="title_menu">Finalizar Pedido</div>
            <label>Forma de pagamento:</label>
            <select id="uf" name="estado">
            <option value="dinhiro">Dinheiro</option>
            <option value="cartao">Cartão</option>
            <option value="pix">Pix</option>
            </select>
            <br>
            <button id="enviar">Enviar Pedido</button><br><br>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
