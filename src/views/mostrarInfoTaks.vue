<script setup>
import { useStoreApi } from "../stores/counter";

const useStateApi = useStoreApi();

function voltarHomeLogada() {
    useStateApi.openInfoTask = false
}
</script>

<template>
    <div class="infoTasks">
        <div>
            <h2>Descrição</h2>
        </div>
        <div class="infoPrincipal">
            *Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias saepe atque impedit quo blanditiis
            incidunt delectus et amet accusamus, omnis corporis assumenda similique eveniet? Aspernatur illo debitis aliquid
            molestiae?
            *Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus assumenda voluptas beatae quia
            eligendi! Incidunt doloribus repellendus dignissimos possimus autem saepe inventore voluptatum provident quae,
            cupiditate qui debitis ab.
            *Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita enim voluptas provident.
            Cupiditate dolores vitae consequatur? Assumenda quaerat dolor, impedit perferendis tempore consequuntur vitae
            velit eos praesentium, vel doloribus.
        </div>
        <div class="buttonsTaks">
            <button @click="voltarHomeLogada()">Voltar</button>
            <button>Excluir tarefa</button>
            <button>Concluir tarefa</button>
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
    .infoPrincipal{
        max-width: 500px;
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
    .buttonsTaks{
        display: flex;
        width: 60%;
        button {
            margin: 0px 10px 0px 10px !important;
            max-width: 300px;
        }
    }

}
</style>