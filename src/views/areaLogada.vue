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
const { returnTask } = storeToRefs(useStateApi);
const taskDelete = ref([]);
const selected = ref('');

const usersReturnApi = computed(() => {
    return infoUser.value;
});

const tasksReturns = computed(() => {
    return returnTask.value;
});

useStateApi.getTasks();
onMounted(() => {
    const login = JSON.parse(localStorage.getItem('login'))
    if(login){
        useStateApi.infoUser = login
    }
});


function backHome() {
    localStorage.removeItem('login')
    useStateApi.showHome = true;
    useStateApi.infoUser = [];
    useStateApi.openInfoTask = false;
    router.push({ name: 'ladingPage' });
}
function openTask() {
    useStateApi.openAddTask = true;
}
function showTask(task) {
    useStateApi.taskEspecifif = task
    useStateApi.openInfoTask = true
}
function selectInfo(task) {
    if (taskDelete.value.includes(task)) {
        var indice = taskDelete.value.indexOf(task)
        taskDelete.value.splice(indice, 1)
    }
    else {
        taskDelete.value.push(task)
    }
}
function atualizarTask(){
    taskDelete.value.map((task, index) => {
        setTimeout(() => {
            task.done = true
            useStateApi.updateTasks(task)
        }, 500 * index);
    })
    setTimeout(() => {
        useStateApi.getTasks()
    }, 1500);
}
function deleteTask() {
    taskDelete.value.map((task, index) => {
        setTimeout(() => {
            useStateApi.deleteTasks(task.id)
        }, 500 * index);
    })
    setTimeout(() => {
        useStateApi.getTasks()
    }, 1500);
}
function filterTask() {
    let filt;
    switch (selected.value) {
        case "false":
            filt = false
            break;
        case "true":
            filt = true
            break;
    }
    if (selected.value) {
        useStateApi.getTasks();
        setTimeout(() => {
            useStateApi.changeTasks(filt)
        }, 200);
    }
    else {
        useStateApi.getTasks();
    }
}
</script>

<template>
    <div class="menuPrincipal">
        <div class="menuLogado">
            <img :src="usersReturnApi.avatar" alt="image de perfil">
            <button @click="backHome()">Finalizar sessao</button>
        </div>
        <div v-if="!openInfoTask">
            <div class="infoLogado">
                <h2>Minhas tarefas</h2>
                <div class="select">
                    <select name="" id="" @change="filterTask()" v-model="selected">
                        <option value="">Todas</option>
                        <option value="false">Ativas</option>
                        <option value="true">Concluidas</option>
                    </select>
                </div>
                <div class="lista">
                    <div v-for="tasksReturn in tasksReturns" :key="tasksReturn.name" class="cards">
                        <input type="checkbox" @click="selectInfo(tasksReturn)">
                        <div class="info" @click="showTask(tasksReturn)">
                            <span>{{ tasksReturn.name }}</span>
                            <div v-if="tasksReturn.done">
                                ✅
                            </div>
                            <div v-else>
                                🕗
                            </div>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
            <div class="barraFinal">
                <button @click="deleteTask()">Excluir tarefa</button>
                <button @click="atualizarTask()">Concluir tarefas</button>
                <button @click="openTask()">Adicionar tarefa</button>
            </div>
            <div v-if="openAddTask" v-bind:class="{ openModal: openAddTask, viewCardNone: !openAddTask }" class="infoApi">
                <div class="card">
                    <adicionarTarefa />
                </div>
            </div>
        </div>
        <div v-if="openInfoTask">
            <mostrarInfoTaks />
        </div>
    </div>
</template>

<style lang="scss">
.openModal {
    display: block;
}

.infoApi {
    position: fixed;
    z-index: 9999;
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
    padding: 30px 0px 0px 0px;

    .cards {
        padding: 15px;
        display: flex;
        justify-content: center;
    }
}

.info {
    background-color: white;
    border-radius: 10px;
    text-align: start;
    padding: 10px;
    justify-content: space-between;
    height: 50px;
    display: flex;
    align-items: center;
    border: none;
    width: 100%;
    cursor: pointer;

    span {
        overflow-wrap: anywhere;
    }
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
    overflow-y: scroll;

    input[type=checkbox] {
        margin-right: 10px;
    }
}
.infoLogado::-webkit-scrollbar-track {
  background-color: rgb(255 255 255 / 73%);
}
.infoLogado::-webkit-scrollbar {
  width: 6px;
  background: rgb(255 255 255 / 73%);;
}
.infoLogado::-webkit-scrollbar-thumb {
  background: #cdcdcd;;
}
.barraFinal {
    min-height: 8%;
    min-width: 8%;
    height: 8vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button:nth-child(1) {
        background-color: rgb(253 131 131);
    }

    button:nth-child(2) {
        background-color: #418841;
    }
    button:nth-child(3) {
        background-color: #64dd64;
    }
}

.select {
    padding-top: 20px;

    select {
        border: none;
        border-radius: 10px;
        width: 150px;
        height: 42px;
        text-align: center;
        border: 1px solid darkgrey;
    }
}

@media (min-width: 600px) {
    .menuLogado {
        justify-content: space-around;
    }

    .info {
        width: 50%;
    }
}
</style>