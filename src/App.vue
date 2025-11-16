<script setup lang = "ts">
	import { ref } from 'vue'
	import Artwork from './components/Artwork.vue'
	import Menu from './components/Menu.vue'
	import { artworks, type Item } from './data.ts';

	const isMenuOpen = ref( false )
	const selected = ref( artworks[0]! )

	function toggleMenu(): void {
		isMenuOpen.value = !isMenuOpen.value
	}

	function handleSelect( item: Item ): void {
		selected.value = item
		console.log( "Rebut al pare:", item )
		isMenuOpen.value = false
	}
</script>

<template>
	<div id = "bg" @mouseenter.self = "toggleMenu">
		<div id = "bg1" class = "bg"></div>
		<div id = "bg2" class = "bg"></div>
		<div id = "bg3" class = "bg"></div>
		<div id = "bg4" class = "bg"></div>
	</div>
	<h1 id = "title">LaGaleriaAleatòria</h1>
	<Artwork id = "artwork" :item = "selected" />
	<Menu id = "menu" v-if = "isMenuOpen" @select = "handleSelect" />
</template>

<style scoped>
	#artwork, #bg, #title, #menu {
		position: fixed;
	}

	#bg {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	#artwork {
		top: 100px;
		left: 100px;
		right: 100px;
		bottom: 100px;
	}

	#title, #menu, .centered {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	#title {
		top: 50px;
		text-align: center;
		text-transform: capitalize;
		color: #F8F8F8;
		font-weight: 100;
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
