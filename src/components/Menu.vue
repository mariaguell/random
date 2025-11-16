<script setup lang = "ts">
	import { ref } from 'vue'
	import { type Item, artworks } from '../data.ts';

	const items = ref( artworks )
	const emit = defineEmits<{ ( e: 'select', item: Item ): void }>()

	function selectItem( item: Item ): void {
		emit( 'select', item )
	}
</script>

<template>
	<div>
		<img src = "../assets/header.svg" alt = "">
		<ul>
			<li v-for = "item in items" v-on:click = "selectItem(item)">{{ item.title }}</li>
		</ul>
		<img src = "../assets/footer.svg" alt = "">
	</div>
</template>

<style scoped>
	div {
		background-color: #121212;
		text-align: center;
		padding: 25px 50px;
		font-family: "Josefin Sans", sans-serif;
		color: #F8F8F8;
	}

	ul {
		list-style: none;
	}

	li {
		padding: 15px 50px;
		position: relative;
		cursor: pointer;
	}

	li:hover {
		/* ToDo */
	}

	li:after {
		content: '';
		border: 1px solid white;
		width: 5px;
		height: 5px;
		display: block;
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translate(-50%, 50%) rotate(45deg);
	}

	li:last-child:after {
		content: none;
	}

	img {
		width: 50%;
		height: auto;
	}
</style>
