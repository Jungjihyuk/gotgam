<template>
  <div class="wrap2">
      <select-wrap></select-wrap>
      <visual-wrap></visual-wrap>
      <router-view></router-view>
  </div>
</template>

<script>
import SelectWrap from './selectWrap.vue';
import VisualWrap from './visualWrap.vue';

export default {
    components: {
        SelectWrap,
        VisualWrap
    }
}
</script>

<style>

</style>