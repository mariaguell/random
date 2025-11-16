<script setup lang = "ts">
	import type { Item, Param } from '../data.ts';

	const props = defineProps<{ param: Param }>()
	const emit = defineEmits<{ ( e: 'change', value: number ): void }>()

	function selectItem( ev: Event ): void {
		emit( 'change', ev.target.value )
	}
	</script>

<template>
	<div>
		<label>{{ param.title }}</label>
		<input type = "range" :min = "param.min" :max = "param.max" :step = "param.step" v-model = "param.value" v-on:change = "selectItem($event)">
	</div>
</template>

<style scoped>
	label, input {
		display: block;
	}

	label {
		text-align: center;
	}
</style>
