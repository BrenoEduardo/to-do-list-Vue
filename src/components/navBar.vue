<script setup>
import router from "@/router";
import modalLogin from "./modalLogin.vue";
import modalCreate from './modalCriarConta.vue';

import { storeToRefs } from "pinia";
import { useStoreApi } from "../stores/counter";
import { ref } from "vue";


const useStateApi = useStoreApi();
const { showInfo } = storeToRefs(useStateApi);
const { showInfoCreate } = storeToRefs(useStateApi);
let active = ref(false);
function changeHomePage(name) {
    router.push({ name: name });
}
function openModalLogin() {
    useStateApi.showInfo = true
    useStateApi.saveState();
}
function openModalCreate() {
    useStateApi.showInfoCreate = true
}
function activeHamburg() {
    active.value = !active.value
}

</script>
<template>
    <div>
        <nav class="nav">
            <div>
                <img src="../assets/logo.png" alt="" @click="activeHamburg()" class="imageShort">
                <img src="../assets/logo.png" alt="" class="imageBig">
            </div>
            <div v-bind:class="{ 'menu menuOpen paddingContainer': active, 'menu paddingContainer': !active }">
                <div class="listWrapper">
                    <ul class="list">
                        <li class="listItem" @click="changeHomePage('ladingPage')">Página Inicial</li>
                        <li class="listItem" @click="changeHomePage('sobreNos')">Sobre nós</li>
                        <li class="listItem" @click="changeHomePage('contatenos')">Contate-nos</li>
                    </ul>
                </div>
            </div>
            <div class="buttons">
                <button class="pointer" @click="openModalLogin()">Login</button>
                <button class="pointer" @click="openModalCreate()">Criar conta</button>
            </div>
            <div @click="activeHamburg()" v-bind:class="{'active':active}">

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
.paddingContainer {
    padding-left: 24px;
    padding-right: 24px;
    box-sizing: border-box;
}

@media (min-width: 768px) {
    .paddingContainer {
        padding-left: 48px;
        padding-right: 48px;
    }
}

@media (min-width: 1024px) {
    .paddingContainer {
        padding-left: 98px;
        padding-right: 98px;
    }
}

@media (min-width: 1366px) {
    .paddingContainer {
        padding-left: 156px;
        padding-right: 156px;
    }
}

@media (min-width: 1440px) {
    .paddingContainer {
        padding-left: calc((100% - 1174px) / 2);
        padding-right: calc((100% - 1174px) / 2);
    }
}

.listItem {
    cursor: pointer;
    padding-bottom: 32px;

    &:hover {
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: var(--color-primary);
        display: flex;

        svg {
            display: none;
        }
    }

    @media (min-width: 1024px) {
        display: block;

        a {
            display: flex;
            color: var(--color-white);

            svg {
                margin-left: 15px;
                display: flex;
            }
        }

        padding: 0 48px;

        &:hover {
            font-weight: 700;
        }
    }
}

.list {
    padding: 0;
    list-style: none;
    margin: 0;

    @media (min-width: 1024px) {
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: var(--font-size-md);
        position: relative;
        top: 10px;
    }
}

.listWrapper {
    display: flex;
    flex-direction: column;
    padding: 87px 0 0;
    flex-wrap: nowrap;
    font-size: var(--font-size-md);
    font-weight: 500;

    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0;
        flex-direction: row;
        width: 100%;
    }

    svg {
        width: 48px;
        margin-bottom: 48px;

        path {
            @media (min-width: 1024px) {
                fill: #fff;
            }
        }

        @media (min-width: 1024px) {
            margin-bottom: 0;
        }
    }
}

.menu {
    display: none;
    width: 0px;

    @media (min-width: 1024px) {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        justify-content: center;
        padding: 70px 32px;
        background-color: rgba(0, 0, 0, 0.2);
        box-shadow: 0px -6px 20px black;
    }
}

.menu.menuOpen {
    min-width: 150px;
    min-height: 100vh;
    background: #d5cdcd;
    ;
    box-shadow: 3px 0px 9px rgba(0, 0, 0, 0.15);
    border-radius: 0px 24px 24px 0px;
    display: block;
    position: fixed;

    left: 0;
    top: 0;
    z-index: 1000;
    width: max-content;
}

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
    justify-content: space-between;

    .imageShort {
        width: 100px;
        cursor: pointer;
        position: relative;
        z-index: 9999;
    }

    @media (min-width: 1023px) {
        .imageShort {
            display: none;
        }
    }

    .imageBig {
        display: none;
    }

    @media (min-width: 1023px) {
        .imageBig {
            display: block;
            width: 240px;
            cursor: pointer;
            position: relative;
            z-index: 9999;
        }
    }

    .buttons {
        display: flex;
        justify-content: space-evenly;
        position: absolute;
        top: 62px;
        right: 40px;
        gap: 2.5rem;
    }

    button {
        border: none;
        border-radius: 10px;
        padding: 20px;
        font-weight: 700;
        width: max-content;
        color: white;
        background-color: #5c4842;
        font-size: 12px;
        box-shadow: 0px 0px 24px 1px #f0e14a;
    }

    @media (max-width: 1023px) {
        .buttons {
            top: 20px;
            right: 20px;
            gap: 0.5rem;
        }

        button {
            width: max-content;
            padding: 10px;

        }
    }

    button:hover {
        transition: all .2s ease-in-out;
        transform: scale(1.1)
    }

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
    }
}
.active{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.2);
    }
.pointer {
    cursor: pointer;
}</style>