<script setup lang = "ts">
	import { isNil } from 'lodash';
	import type { Param } from '../models/Param.ts';

	const props = defineProps<{ param: Param }>()
	const emit = defineEmits<{ ( e: 'change', value: string ): void }>()

	function selectItem( ev: Event ): void {
		if ( isNil( ( ev.target ) ) ) return
		const aaa = ev.target as HTMLInputElement
		emit( 'change', aaa.value )
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
