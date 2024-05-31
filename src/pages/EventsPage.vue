<template>
	<div class="page" id="opp">
		<div class="content">
			<div class="opportunities-header">
				Your Opportunities
			</div>
			<div class="opportunities-cards">
				<OpportunityCard
					v-for="(opp,index) in oppArray"
					:key="opp.header"
					:opp="opp"
					:isActive="data.active === index"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import OpportunityCard from '../components/OpportunityCard.vue';
import Opportunity from '../type/opportunity';
import opportunities from '../data/opportunities';
import { onMounted, reactive, onBeforeUnmount } from 'vue';

export default {
	name: 'EventsPage',
	components: {
		OpportunityCard
	},
	setup() {
		const oppArray:Array<Opportunity> = opportunities.map(opp => {
			return new Opportunity(opp.header, opp.description, opp.image)
		})

		const data = reactive<{active:number}>({
			active: -1,
		})

		const scrollHandler = () => {
			const elements = Array.from(document.querySelectorAll('.opp-card'));
			const middle = window.innerHeight / 2;
			const distances = elements.map((element) => {
				const rect = element.getBoundingClientRect();
				const elementMiddle = (rect.top + rect.bottom) / 2;
				return Math.abs(elementMiddle - middle);
			});
			const closestElement = distances.findIndex((distance) => {
				return distance === Math.min(...distances);
			});

			if (data.active === closestElement)
				return
			data.active = closestElement;
		};

		onMounted(() => {
			document.addEventListener('scroll', scrollHandler)
		});
		onBeforeUnmount(() => {
			document.removeEventListener('scroll', scrollHandler)
		});

		return {
			data,
			oppArray,
		}
	}
};
</script>

<style scoped>
@import url('../buttons.css');
.content{
	padding: 10%;
	gap: 48px;
}

.opportunities-cards{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	gap:24px;
}

.opportunities-header{
	font-size: 3em;
	font-family: "DM Serif Display", serif;
	color: rgb(36, 36, 36);
	text-align: center;
	width: 100%;
}

.page{
	background: var(--background-light);
}

@media (max-width: 800px) {

	.page {
		height: 100%;
	}
	.opportunities-cards{
		flex-direction: column;
		align-items: center;
	}
}
</style>