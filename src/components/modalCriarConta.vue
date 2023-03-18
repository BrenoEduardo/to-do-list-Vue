<script setup>
import router from "@/router";
// import { storeToRefs } from "pinia";
import { useStoreApi } from "../stores/counter";

const useStateApi = useStoreApi();
function backHome() {
    router.push({ name: 'ladingPage' });
    useStateApi.showInfoCreate = false
}
</script>


<template>
    <div class="divPrincipalCard">
        <label for="">Email</label>
        <input type="text">
        <label for="">Senha</label>
        <input type="text">
        <label for="">Data de nascimento</label>
        <input type="date">
        <label for="">CPF</label>
        <input type="text">
        <button class="buttonVolt">Enviar</button>
        <button @click="backHome()" class="buttonVolt">Voltar</button>
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
    background-color: #5c4842;;
}

.buttonVolt:hover {
    transition: all .2s ease-in-out;
    transform: scale(1.1)
}
</style>