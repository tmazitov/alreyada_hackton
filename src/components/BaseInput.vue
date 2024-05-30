<template>
	<div class="input">
		<van-field class="input-field" label-class="input-field__label" 
			v-model="text" 
			:label="label"
			:placeholder="placeholder"
			:autofocus="autofocus"
		/>
	</div>
</template>

<script lang="ts"
>
import { computed } from 'vue';

export default {
	name: 'BaseInput',
	model : {
		prop: 'value',
		event: 'update:value',
	},
	props: {
		value: {
			type: String,
			required: true,
		},
		label: {
			type: String
		},
		placeholder: {
			type: String,
		},
		autofocus: {
			type: Boolean,
			default: false,
		}
	},
	setup(props, ctx){
		const text = computed({
			get: () => props.value,
			set: (value) => ctx.emit('update:value', value)
		})

		return {
			text,
			label: props.label,
			autofocus: props.autofocus,
			placeholder: props.placeholder,
		}
	}
};
</script>

<style scoped>
.input-field{
	border-radius: 16px;
	background: var(--background);
	border: 1px solid var(--font-color);
	color: var(--font-color);
	--van-field-label-color: var(--font-color);
	--van-field-input-text-color: var(--font-color);
	--van-field-placeholder-text-color: gray;
	/* --van-field-label-width: 6em; */
	font-family: 'Rubik';
}


</style>