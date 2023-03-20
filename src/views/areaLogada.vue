<script setup>

import { storeToRefs } from "pinia";
import { useStoreApi } from "../stores/counter";
import { computed } from "vue";
import { onMounted } from "vue";
import mostrarInfoTaks from "./mostrarInfoTaks.vue";
import adicionarTarefa from "../components/adicionarTarefa.vue";
import router from "@/router";
import { ref } from "vue";


const useStateApi = useStoreApi();
const { infoUser } = storeToRefs(useStateApi);
const { openAddTask } = storeToRefs(useStateApi);
const { openInfoTask } = storeToRefs(useStateApi);
const showAvatarUndefined = ref("");

const usersReturnApi = computed(() => {
    return infoUser.value;
});

onMounted(() => {
  if(!usersReturnApi.value.avatar){
    showAvatarUndefined.value = true;
  }
});

const mock = [
    {
        "descricao": "Encher a garrafa"
    },
    {
        "descricao": "Fazer API"
    },
    {
        "descricao": "Fazer Request"
    }
]
function backHome() {
    useStateApi.showHome = true;
    useStateApi.infoUser = [];
    router.push({ name: 'ladingPage' });
}
function openTask() {
    useStateApi.openAddTask = true;
    console.log(openAddTask, 'openAddTask')
}
function showTask(){
    useStateApi.openInfoTask = true
}
</script>

<template>
    <div class="menuPrincipal">
        <div class="menuLogado">
            <img :src="usersReturnApi.avatar" alt="" v-if="!showAvatarUndefined">
            <img src="../assets/avatar.webp" alt="" v-else>
            <button @click="backHome()">Finalizar sessao</button>
        </div>
        <div v-if="!openInfoTask">
            <div class="infoLogado">
                <h2>Minhas tarefas</h2>
                <div class="lista">
                    <div v-for="mock in mock" :key="mock.descricao" class="cards">
                        <input type="checkbox">
                        <div class="info" @click="showTask()">
                            {{ mock.descricao }}
                        </div>
                        <br>
                    </div>
                </div>
            </div>
            <div class="barraFinal">
                <button>Excluir tarefa</button>
                <button @click="openTask()">Adicionar tarefa</button>
            </div>
            <div v-if="openAddTask" v-bind:class="{ openModal: openAddTask, viewCardNone: !openAddTask }" class="infoApi">
                <div class="card">
                    <adicionarTarefa />
                </div>
            </div>
        </div>
        <div v-if="openInfoTask">
            <mostrarInfoTaks/>
        </div>
    </div>
</template>

<style lang="scss">
.openModal {
    display: block;
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

.menuPrincipal {
    min-height: 100%;
    min-width: 100%;
    height: 100vh;

    button {
        padding: 10px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        color: white;
    }

    button:hover {
        transition: all .2s ease-in-out;
        transform: scale(1.1)
    }
}

.lista {
    padding: 50px 0px 0px 0px;

    .cards {
        padding: 15px;
        display: flex;
    }
}

.info {
    background-color: white;
    border-radius: 10px;
    text-align: start;
    padding-left: 20px;
    height: 50px;
    display: flex;
    align-items: center;
    border: none;
    width: 100%;
    cursor: pointer;
}

.menuLogado {
    min-height: 15%;
    min-width: 15%;
    height: 15vh;
    padding: 70px 15px 20px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        background-color: rgb(253 131 131);
    }

    img {
        border-radius: 30px;
        width: 50px;
    }
}

.infoLogado {
    min-height: 77%;
    min-width: 77%;
    height: 77vh;
    text-align: center;
    padding: 10px;
    background-color: #f1f5f8;

    input[type=checkbox] {
        margin-right: 10px;
    }
}

.barraFinal {
    min-height: 8%;
    min-width: 8%;
    height: 8vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    button:nth-child(1) {
        background-color: rgb(253 131 131);
    }

    button:nth-child(2) {
        background-color: #64dd64;
    }
}</style>