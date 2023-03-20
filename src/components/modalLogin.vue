<script setup>
import router from "@/router";
import { storeToRefs } from "pinia";
import { useStoreApi } from "../stores/counter";
import { ref } from "vue";
import { computed } from "vue";

const useStateApi = useStoreApi();
const { users } = storeToRefs(useStateApi);
const valueEmail = ref("");
const valuePassword = ref("");
const loginWrong = ref(false);

const usersReturnApi = computed(() => {
    return users.value;
});

function backHome() {
    router.push({ name: 'ladingPage' });
    useStateApi.showInfo = false
}
function verifyLogin() {
    usersReturnApi.value.every((users) => {
        if (users.login === valueEmail.value && users.password == valuePassword.value) {
            useStateApi.showInfo = false
            useStateApi.showHome = false;
            useStateApi.infoUser = users
            loginWrong.value = false;
            router.push({ name: 'areaLogada' })
            return false
        }
        else {
            loginWrong.value = true;
            return true
        }
    })
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
                <input type="password" v-model="valuePassword">
            </div>
        </div>
        <p v-if="loginWrong" class="wrong">Usuário ou senha incorretos, por favor tente novamente</p>
        <div class="buttons">
            <button class="buttonVolt" @click="verifyLogin()">Enviar</button>
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
    width: 400px;
    max-height: 700px;
    border-radius: 20px;
    padding: 10px 0;
    box-shadow: 0px 0px 25px 0px #000000;

    .inputs {
        display: flex;
        flex-direction: column;
    }

    .buttons {
        display: flex;
        justify-content: space-around;
        padding: 0px 72px;
        width: 100%;
    }

    .labelInput {
        display: flex;
        flex-direction: column;
        padding: 10px;
        align-items: center;

        label {
            padding-bottom: 10px;
        }

        input {
            width: 300px;
            padding: 3px;
            border-radius: 10px;
            border: none;
        }
    }

    .wrong {
        color: red;
    }

    .buttonVolt {
        padding: 16px 24px;
        width: 110px;
        height: 40px;
        color: #fff;
        border-radius: 30px;
        border: none;
        font-size: 12px;
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
}


@media (max-width: 650px) {
    .divPrincipalCard {
        scale: 0.7;
    }
}
</style>