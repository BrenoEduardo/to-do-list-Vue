<script setup>
import router from "@/router";
import { useStoreApi } from "../stores/counter";
import { ref } from "vue";


const useStateApi = useStoreApi();
const valueEmail = ref("");
const valuePassword = ref("");
const valueName = ref("");
function backHome() {
    router.push({ name: 'ladingPage' });
    useStateApi.showInfoCreate = false
}
// [{ "createdAt": "2023-03-18T09:32:03.147Z", "name": "Isaac Thompson", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/552.jpg", "login": "Monte.Streich5@yahoo.com", "password": "MEeuSlBDlSYf6G5", "active": false, "id": "1" }]
function sendNewUser() {
    const payload = 
        {
            "name":valueName.value,
            "active": false,
            "createdAt":"2023-03-19T12:29:12.784Z",
            "avatar": null,
            "login": valueEmail.value,
            "password": valuePassword.value,
            "id": "81"
        }
    useStateApi.sendUser(payload);
    backHome()
}
</script>


<template>
    <div class="divPrincipalCard">
        <div class="inputs">
            <div class="labelInput">
                <label for="">Email</label>
                <input type="text" v-model="valueEmail">
            </div>
            <div class="labelInput">
                <label for="">Senha</label>
                <input type="text" v-model="valuePassword">
            </div>
            <div class="labelInput">
                <label for="">Nome</label>
                <input type="text" v-model="valueName">
            </div>
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