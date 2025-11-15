<script setup lang="ts">
	import Artwork from './components/Artwork.vue'
	import Menu from './components/Menu.vue'
</script>

<template>
	<div id="wall">
		<h1 id="title">La Galeria Aleatòria</h1>
		<Artwork id="artwork" />
	</div>
	<Menu id="menu" />
</template>

<style scoped>
	#wall {
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
	#wall {
		background-size: contain;
		background-position: center;
	}
	#title {
		text-align: center;
		font-family: "Poiret One", sans-serif;
		text-transform: capitalize;
		margin-top: -67px; /* ToDo: això està massa hardcodejat */
	}
</style>
