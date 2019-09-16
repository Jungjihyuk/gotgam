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

export default {
    components: {
        Header,
        Container,
        Footer
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
