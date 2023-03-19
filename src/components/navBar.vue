<script setup>
import router from "@/router";
import modalLogin from "./modalLogin.vue";
import modalCreate from './modalCriarConta.vue';

import { storeToRefs } from "pinia";
import { useStoreApi } from "../stores/counter";

const useStateApi = useStoreApi();
const { showInfo } = storeToRefs(useStateApi);
const { showInfoCreate } = storeToRefs(useStateApi);

function changeHomePage(name) {
    router.push({ name: name });
}
function openModalLogin() {
    useStateApi.showInfo = true
    useStateApi.saveState();
}
function openModalCreate(){
    useStateApi.showInfoCreate = true
}
</script>
<template>
    <div>
        <nav class="nav">
            <img src="../assets/logo.png" alt="" @click="changeHomePage('ladingPage')">
            <div class="nav__divPrincipal">
                <div class="menu">
                    <span class="pointer" @click="changeHomePage('ladingPage')">Página Inicial</span>
                    <span class="pointer" @click="changeHomePage('sobreNos')">Sobre nós</span>
                    <span class="pointer" @click="changeHomePage('contatenos')">Contate-nos</span>
                </div>
                <div class="buttons">
                    <button class="pointer" @click="openModalLogin()">Login</button>
                    <button class="pointer" @click="openModalCreate()">Criar conta</button>
                </div>
            </div>
        </nav>
    </div>
    <div v-if="showInfo" v-bind:class="{ openModal: showInfo, viewCardNone: !showInfo }" class="infoApi">
        <div class="card">
            <modalLogin />
        </div>
    </div>
    <div v-if="showInfoCreate" v-bind:class="{ openModal: showInfoCreate, viewCardNone: !showInfoCreate }" class="infoApi">
        <div class="card">
            <modalCreate />
        </div>
    </div>
</template>
<style lang="scss">
.infoApi {
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.viewCardNone {
    display: none;
    opacity: 0.9;
}

.card {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.nav {
    display: flex;
    text-align: center;
    align-items: center;
    color: white;

    &__divPrincipal {
        display: flex;
        width: 100%;
        justify-content: space-around;

        .menu {
            width: 50%;
            display: flex;
            justify-content: space-between;
            font-size: 1.2vw;

            span {
                display: flex;
                align-items: center;
            }
        }

        .buttons {
            width: 30%;
            display: flex;
            justify-content: space-evenly;
        }

        button {
            border: none;
            border-radius: 20px;
            width: 10vw;
            height: 5vh;
            color: white;
            background-color: #5c4842;
            font-size: 1.2vw;
            box-shadow: 0px 0px 24px 1px #f0e14a;
        }

        button:hover {
            transition: all .2s ease-in-out;
            transform: scale(1.1)
        }
    }
}

img {
    width: 15vw;
    cursor: pointer;
}

.pointer {
    cursor: pointer;
}</style>