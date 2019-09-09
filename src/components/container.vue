<template>
  <div class="container">
        <div id="background">
            <h3>This menu is responsive, resized on.</h3>
            <h3>The header is hide when scroll down and show when scroll up, try it !</h3>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.container {
    width: 100%;
    min-height: 100vh; /* footer 하단 고정 */
}

@cblue : #41B883;
@cgrey : #3E3A37;
@cwhite : #ffffff;
@ccream : #FAFBFC;
@cgrey_green: #435466;
@clightgrey : #DAD9D7;

@body_height_8: calc((100vh - 113px)/8);
@body_height_4: calc((100vh - 113px)/4);

#background {
	content: '';
	display: block;
	width: 100%;
	height: 200vh;
	padding: 5%;
	background-color: @cblue;
	h3 {
		margin: 0;
		margin-bottom: 1%;
		font-size: 1.5em;
		text-align: center;
		color: @cwhite;
		i {
			width: 13px;
			height: 20px;
			background-color: @cwhite;
		}
	}
}
</style>