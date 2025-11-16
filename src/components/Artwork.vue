<script setup lang = "ts">
	import type { Item } from '../data.ts';
	import Input from './Input.vue'

	const props = defineProps<{ item: Item }>()

	function updateArtwork( value: number ): void {
		const bbb = props.item.params.map( el => `${el.key}=${el.value}` ).join( '&' )
		console.log("updateArtwork", bbb)
	}
</script>

<template>
	<div>
		<iframe id = "artwork-img" :src = "props.item.link"></iframe>
		<div id = "artwork-info">
			<h2 id = "artwork-info-title">{{ props.item.title }}</h2>
			<div id = "artwork-info-description">{{ props.item.description }}</div>
			<div id = "artwork-info-params">
				<Input v-for = "param in props.item.params" :param = "param" @change = "updateArtwork($event)" />
			</div>
			<div id = "artwork-info-date">{{ props.item.formatedDate }}</div>
			<a id = "artwork-info-link" :href = "props.item.link" target = "_BLANK">Full screen</a>
		</div>
	</div>
</template>

<style scoped>
	#artwork {
		display: grid;
		grid-template-columns: 1fr 1fr;
		background-color: #FFFE;
	}

	#artwork-img {
		width: 100%;
		height: 100%;
		border: none;
	}

	#artwork-info {
		padding: 50px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto auto 1fr;
		gap: 35px;
	}

	#artwork-info-title, #artwork-info-description, #artwork-info-params {
		grid-column: span 2;
	}

	#artwork-info-title, #artwork-info-description {
		text-align: center;
	}

	#artwork-info-params {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
		justify-items: center;
	}

	#artwork-info-date, #artwork-info-link {
		align-self: end;
	}

	#artwork-info-date {
		justify-self: start;
	}

	#artwork-info-link {
		justify-self: end;
	}
</style>
