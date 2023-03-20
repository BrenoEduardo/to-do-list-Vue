<script setup>
import { useStoreApi } from "../stores/counter";

const useStateApi = useStoreApi();

function fecharModal() {
    useStateApi.openAddTask = false
}
</script>

<template>
    <div class="task">
        <div>
            <div class="pdb-20">
                <h2>Título da tarefa</h2>
                <input type="text" name="" id="">
            </div>
            <div class="pdb-20">
                <h2>Descrição</h2>
                <textarea name="" id="" cols="30" rows="10" class="descricao"></textarea>
            </div>
        </div>
        <div class="buttonsTask">
            <button @click="fecharModal()">Fechar</button>
            <button class="buttonTask">Salvar</button>
        </div>
    </div>
</template>

<style lang="scss">
.task {
    padding: 50px 50px 20px 50px;
    background: #ebe7de;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 1px #30302e;;

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

.pdb-20 {
    padding-bottom: 20px;
}
</style>