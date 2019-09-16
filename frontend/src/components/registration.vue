<template>
  <div class="registration_wrap">
      <Header></Header>
      <form action="">
          <input type="text" />
      </form>
  </div>
</template>

<script>
import Header from './header.vue';

export default {
    components: {
        Header
    },
    data() {
        return {
            link: "registration"
        }
    }
}
</script>

<style>

</style>