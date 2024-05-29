<template>
<div class="opp-card">
	<div class="card-image" v-bind:class="{active:isActive}">
		<span class="iconify" :data-icon="opp.image" data-width="128" data-height="128"></span>
	</div>
	<div class="card-content">
		<div class="card-header" v-bind:class="{active:isActive}">{{ opp.header }}</div>
		<div>{{ opp.description }}</div>
	</div>	
</div>
</template>

<script lang="ts">
import Opportunity from '../type/opportunity';

export default {
	name: 'OpportunityCard',
	props: {
		opp: {	
			type: Opportunity,
			required: true,
		},
		isActive: {
			type: Boolean,
			default: false,
		}
	},
	setup(props:any) {

		return {
			opp: props.opp
		}
	}
};
</script>

<style scoped>
.opp-card {
	border-radius: 16px;
	max-width: 330px;
	flex: 1;
	background: var(--background);

	gap: 16px;
	display: flex;
	flex-direction: column;
	transition: box-shadow 0.3s;
	overflow: hidden;
	padding: 16px;
	padding-bottom: 24px;
}


.card:hover {
	box-shadow: 0 2px 25px var(--primary);

}

.card:hover > .card-content > .card-header {
	color: var(--primary);
}

.card-header {
	margin: 0;
	font-size: 1.5em;
	transition: color 0.3s;
	font-family: "DM Serif Display", serif;
	color: white;
	user-select: none;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.card-content{
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.card-content > * {
	user-select: none;
}

.card-image {
	width: 100%;
	height: 150px;

	display: flex;
	justify-content: center;
	align-items: center;

	overflow: hidden;
	max-width: inherit;
	height: auto;
	transition: color 0.3s;
}
.card:hover > .card-image {

	color: var(--primary);
}

@media (max-width: 400px) {
	.opp-card {
		max-width: 100%;
	}
	.active{
		color: var(--primary);
	}
}



</style>
