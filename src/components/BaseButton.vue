<template>
	<van-button class="button base" type="primary" size="large">{{label}}</van-button>
</template>

<script >
export default {
	name: 'BaseButton',
	props: {
		label: {
			type: String,
		}
	},
	setup(props, ctx){
		return {
			label: props.label
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