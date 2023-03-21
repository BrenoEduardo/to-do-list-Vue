<script setup>
import { useStoreApi } from "../stores/counter";
import { computed } from "vue";

const useStateApi = useStoreApi();

const usersReturnApi = computed(() => {
    return useStateApi.taskEspecifif;
});
function voltarHomeLogada() {
    useStateApi.openInfoTask = false
}
function getTaskTimeOut(){
    setTimeout(() => {
        useStateApi.getTasks()
    }, 500);
}
function excluirTask() {
    useStateApi.deleteTasks(usersReturnApi.value.id)
    getTaskTimeOut();
    voltarHomeLogada();
}
function updateTask(){
    usersReturnApi.value.done = true
    useStateApi.updateTasks(usersReturnApi.value)
    getTaskTimeOut();
    voltarHomeLogada();
}
</script>

<template>
    <div class="infoTasks">
        <div>
            <h2>Descrição</h2>
        </div>
        <div class="infoPrincipal">
            {{ usersReturnApi.descricao }}
        </div>
        <div class="buttonsTaks">
            <button @click="voltarHomeLogada()">Voltar</button>
            <button @click="excluirTask()">Excluir tarefa</button>
            <button @click="updateTask()">Concluir tarefa</button>
        </div>
    </div>
</template>

<style lang="scss">
.infoTasks {
    padding: 20px;
    background-color: #f1f5f8;
    height: 85vh;
    max-height: 850%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .infoPrincipal {
        max-width: 500px;
        text-align: justify;
        overflow-wrap: anywhere;
    }

    h2 {
        padding-bottom: 10px;
    }

    .buttonsTaks {
        button:nth-child(1) {
            background-color: rgb(73, 60, 60);
        }

        button:nth-child(2) {
            background-color: rgb(253 131 131);
        }

        button:nth-child(3) {
            background-color: #64dd64;
        }

        button {
            width: 100%;
            margin: 10px 0px 10px 0px;
            max-width: 300px;
        }
    }
}

@media (min-width: 768px) {
    .buttonsTaks {
        display: flex;
        width: 650px;

        button {
            margin: 0px 10px 0px 10px !important;
            max-width: 300px;
        }
    }

}</style>