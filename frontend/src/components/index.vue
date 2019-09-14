<template>
    <div class="wrapper">
        <Header></Header>
        <Container></Container>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './header.vue';
import Container from './container.vue';
import Footer from './footer.vue';
import Registration from "./registration.vue";

export default {
    components: {
        Header,
        Container,
        Footer,
        Registration,
    }
}
</script>

<style>
.wrapper {
    position: relative;
    width: 100%;
    min-height: 100%;
}
</style>
