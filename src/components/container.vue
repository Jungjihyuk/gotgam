<template>
  <div class="container">
	  <HomeHeader></HomeHeader>
	  <div class="wrap">
		<Section1></Section1>
		<Section2></Section2>
		<Section3></Section3>
		<Section4></Section4>
	  </div>	
  </div>
</template>

<script>
import HomeHeader from './homeHeader.vue';
import Section1 from './section1.vue';
import Section2 from './section2.vue';
import Section3 from './section3.vue';
import Section4 from './section4.vue';

export default {
	components: {
		HomeHeader,
		Section1,
		Section2,
		Section3,
		Section4
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
	margin: 0 auto;
}
</style>