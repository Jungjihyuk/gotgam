<template>
  <div class="container">
	  <HomeHeader></HomeHeader>
	  <div class="wrap">
		  
	  </div>	
  </div>
</template>

<script>
import HomeHeader from './homeHeader.vue';

export default {
	components: {
		HomeHeader
	}
}
</script>

<style lang="less">
.container {
    width: 100%;
    min-height: 100vh; /* footer 하단 고정 */
}

.container .wrap {
	width: 100%;
}
</style>