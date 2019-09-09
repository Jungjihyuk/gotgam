<template>
  <div class="container">
        <div id="loader" v-if="load">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div id="overlay" v-if="load"></div>
        <div id="background">
            <h3>This menu is responsive, resized on.</h3>
            <h3>The header is hide when scroll down and show when scroll up, try it !</h3>
            <button v-on:click="loaded()">Click here for loader!</button>
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
	width: 100vw;
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
	button {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		cursor: pointer;
		padding: 5px 10px;
		font-size: 1.3em;
		border:none;
		background-color: @cgrey_green;
		color: @cwhite;
	}
}
#loader {
	display: block;
	width: 50px;
	height: 50px;
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 3;
	margin-left: -25px;
	margin-top: -25px;
	animation: spin 1s infinite linear;
	span {
	    display: block;
	    width: 100%;
	    height: 100%;
	    border-radius: 50%;
	    position: absolute;
	    top: 0;
	    left: 0;
	    border-width: 0px 0px 10px 10px;
	    border-style: solid;
	    border-color: transparent;
		&:nth-child(0) {border-left-color: @cblue;}
	    &:nth-child(1) {transform: rotate(-40deg);  border-left-color: @cblue;}
	  	&:nth-child(2) {transform: rotate(-80deg);  border-left-color: @cblue;}
	  	&:nth-child(3) {transform: rotate(-130deg);	border-left-color: @cgrey_green;}
	  	&:nth-child(4) {transform: rotate(-170deg);	border-left-color: @cgrey_green;}
	  	&:nth-child(5) {transform: rotate(-210deg);	border-left-color: @cgrey_green;}
	  	&:nth-child(6) {transform: rotate(-250deg);	border-left-color: @cgrey;}
	  	&:nth-child(7) {transform: rotate(-280deg);	border-left-color: @cgrey;}
	  	&:nth-child(8) {transform: rotate(-320deg);	border-left-color: @cgrey;}
	  	&:nth-child(9) {transform: rotate(-360deg);	border-left-color: @cblue;}
	}
}
@keyframes spin { from {transform: rotate(0deg);} to {transform: rotate(-360deg);}}
#overlay {
	display: block;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 2;
	background-color: @cgrey;
	opacity: 0.5;
}

</style>