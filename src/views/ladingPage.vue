<script setup>
// import navBar from '../components/navBar.vue';
</script>

<template>
    <div>
        <main>
            <div class="blur">
                <div class="div">
                    <h1>To do list sistemas e o que você esta precisando!!</h1>
                    <p>Você quer ter mais facilidade para lembrar tarefas e atividades importante, então venha com o a
                        gente, o
                        sitema to do list e perfeito para pessoas
                        bastante atarefadas e que precisam de um sistema confiável e seguro, além de prático para seus
                        afazeres
                    </p>
                </div>
            </div>
        </main>
    </div>
</template>


<style lang="scss">
.bckImage {
    background-image: url("../assets/background.webp") !important;
    min-height: 100%;
    min-width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    height: 100vh;
}

.pointer {
    cursor: pointer;
}

main {
    div {
        padding: 8vw;
        color: white;

        p {
            padding-top: 25px;
        }
    }

    @media (min-width: 1024px) {
        div {
            width: 60vw;
        }
    }
}

</style>