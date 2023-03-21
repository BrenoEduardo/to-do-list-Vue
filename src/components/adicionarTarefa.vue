<script setup>
import { useStoreApi } from "../stores/counter";
import { ref } from "vue";


const useStateApi = useStoreApi();
const valueTitle = ref("");
const valueDescription = ref("");
const error = ref(false)
function fecharModal() {
    useStateApi.openAddTask = false
}
function saveTask() {
    if (valueTitle.value || valueDescription.value) {
        const payload = {
            "createdAt": new Date(),
            "name": valueTitle.value,
            "done": false,
            "descricao": valueDescription.value,
        }
        useStateApi.postTasks(payload)
        setTimeout(() => {
            useStateApi.getTasks()
        }, 500);
        useStateApi.openAddTask = false;
    }
    else {
        error.value = true
    }
}
</script>

<template>
    <div class="task">
        <div>
            <div class="pdb-20">
                <h2>Título da tarefa</h2>
                <input type="text" name="" id="" v-model="valueTitle">
            </div>
            <div class="pdb-20">
                <h2>Descrição</h2>
                <textarea name="" id="" cols="30" rows="10" class="descricao" v-model="valueDescription"></textarea>
                <p v-if="error">Preencha algum campo para salvar</p>
            </div>
        </div>
        <div class="buttonsTask">
            <button @click="fecharModal()">Fechar</button>
            <button class="buttonTask" @click="saveTask()">Salvar</button>
        </div>
    </div>
</template>

<style lang="scss">
.task {
    padding: 50px 50px 20px 50px;
    background: #ebe7de;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 1px #30302e;

    p {
        color: red;
        font-size: 12px;
        text-align: center;
    }

    input {
        border: none;
        border-radius: 10px;
        width: 100%;
        height: 35px;
        padding-left: 5px;

    }

    h2 {
        padding-bottom: 5px;
    }

    textarea {
        border: none;
        border-radius: 10px;
        padding-left: 5px;
    }
}

.buttonsTask {
    display: flex;
    justify-content: space-evenly;

    button {
        width: 80px;
    }

    button:nth-child(1) {
        background-color: rgb(253 131 131);
    }

    button:nth-child(2) {
        background-color: #64dd64;
    }
}

@media (min-width: 1024px) {
    .task {
        padding: 100px 100px 40px 100px;
    }

    textarea {
        width: 300px;
        height: 250px;
    }
}

.pdb-20 {
    padding-bottom: 20px;
}</style>