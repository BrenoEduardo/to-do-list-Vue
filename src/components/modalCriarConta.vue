<script setup>
import router from "@/router";
import { useStoreApi } from "../stores/counter";
import { ref } from "vue";


const useStateApi = useStoreApi();
const valueEmail = ref("");
const valuePassword = ref("");
const valueName = ref("");
const errorEmail = ref(false)
const errorPassord = ref(false)
function backHome() {
    router.push({ name: 'ladingPage' });
    useStateApi.showInfoCreate = false
}

function sendNewUser() {
    if (!valueEmail.value.includes('@')) {
        errorEmail.value = true;
        errorPassord.value = false;
    }
    else if(valuePassword.value < 3){
        errorPassord.value = true;
        errorEmail.value = false;
    }
    else if(valueEmail.value && valuePassword.value && valueName.value) {
        const payload =
        {
            "name": valueName.value,
            "active": false,
            "login": valueEmail.value,
            "password": valuePassword.value,
        }
        useStateApi.sendUser(payload);
        backHome()
    }
}
</script>


<template>
    <div class="divPrincipalCard">
        <div class="inputs">
            <div class="labelInput">
                <label for="">Email</label>
                <input type="text" v-model="valueEmail" placeholder="Email com @">
            </div>
            <p v-if="errorEmail">Email incorreto</p>
            <div class="labelInput">
                <label for="">Senha</label>
                <input type="text" v-model="valuePassword" placeholder="No mínimo 3 caractéres">
            </div>
            <p v-if="errorPassord">Senha com no mínimo 3 caractéres</p>
            <div class="labelInput">
                <label for="">Nome</label>
                <input type="text" v-model="valueName">
            </div>
            <p v-if="error">Alguns dos campos não estão preenchidos</p>
        </div>
        <div class="buttons">
            <button @click="sendNewUser()" class="buttonVolt">Enviar</button>
            <button @click="backHome()" class="buttonVolt">Voltar</button>
        </div>
    </div>
</template>

<style lang="scss">
.divPrincipalCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #84a586;
    width: 500px;
    max-height: 700px;
    border-radius: 20px;
    padding: 30px 0;
    box-shadow: 0px 0px 25px 0px #000000;

    p {
        color: red;
        font-size: 12px;
        text-align: center;
    }
}

@media (max-width: 650px) {
    .divPrincipalCard {
        scale: 0.7;
    }
}

.buttonVolt {
    padding: 16px 24px;
    width: 150px;
    color: #fff;
    border-radius: 30px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    margin: 15px 0;
    background-color: #5c4842;
    ;
}

.buttonVolt:hover {
    transition: all .2s ease-in-out;
    transform: scale(1.1)
}
</style>