<template>
	<van-button class="button base" :disabled="disabled" type="primary" size="large">{{label}}</van-button>
</template>

<script lang="ts">
import { computed } from 'vue';
export default {
	name: 'BaseButton',
	props: {
		label: {
			type: String,
		},
		disabled: {
			type: Boolean,
			default: false,
		}
	},
	setup(props, ctx){
		const disabled = computed(() => props.disabled)

		return {
			label: props.label,
			disabled,
		}
	}
};
</script>

<style scoped>
@import url('../buttons.css');

.base {
	--van-button-primary-background: var(--primary);
	--van-button-primary-color: #232323;
	--van-button-primary-border-color: var(--primary);
	font-size: 1.3em;
	font-family: "Rubik";
}
</style>