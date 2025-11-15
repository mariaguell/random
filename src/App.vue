<script setup lang = "ts">
	import Artwork from './components/Artwork.vue'
	import Menu from './components/Menu.vue'
</script>

<template>
	<div id = "bg">
		<div id = "bg1" class = "bg"></div>
		<div id = "bg2" class = "bg"></div>
		<div id = "bg3" class = "bg"></div>
		<div id = "bg4" class = "bg"></div>
	</div>
	<div id = "wall">
		<h1 id = "title">La Galeria Aleatòria</h1>
		<Artwork id = "artwork" />
	</div>
	<Menu id = "menu" />
</template>

<style scoped>
	#wall, #bg {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	#wall {
		padding: 100px;
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: auto 1fr;
	}

	#title {
		text-align: center;
		font-family: "Poiret One", sans-serif;
		text-transform: capitalize;
		margin-top: -67px; /* ToDo: això està massa hardcodejat */
		color: #F8F8F8;
	}

	#bg {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		background-color: #121212;
	}

	#bg1 {
		transform: scale(1, 1)
	}

	#bg2 {
		transform: scale(-1, 1)
	}

	#bg3 {
		transform: scale(1, -1)
	}

	#bg4 {
		transform: scale(-1, -1)
	}
</style>
