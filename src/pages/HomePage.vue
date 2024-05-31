<template>
	<div class="page" id="home">
		<div class="content">
			<div class="event-greeting">
				<div class="event-name">
					<div>{{`Eco`}}</div>
					<div>{{`Scape`}}</div>
				</div>
				<div class="event-description" style="font-size: 1.4em;">
					Welcome to the Al Reyada Event!
				</div>
				<div class="event-description">
					Our Educational Escape Room presents a series of THOUGHTFUL challenges dedicated to 
					<a class="action">better understanding sustainable happens</a>
				</div>
			</div>

			<div class="event-hot-buttons">
				<van-button class="button primary" @click="onOpenRegForm">
					Registration
				</van-button>
				<van-button class="button outlined" icon="notes-o" @click="navigate('map')">
					Map
				</van-button>
				<van-button class="button outlined" icon="friends-o" @click="navigate('speakers')">
					Speakers
				</van-button>
				<!-- <van-button class="button outlined">
					More
				</van-button> -->
			</div>

			<div class="event-opp">
				<InfiniteScrollingLine :messages="messages"/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import InfiniteScrollingLine from '../components/InfiniteScrollingLine.vue';
import navigate from '../type/navigator';

export default {
	name : "HomePage",
	model: {
		prop: 'showRegForm',
		event: 'update:showRegForm',
	},

	props : {
		showRegForm: {
			type: Boolean,
			required: true,
		}
	},
	components: {
		InfiniteScrollingLine,
	},
	setup(_, ctx){
		const messages = [
			"Cool",
			"Student",
			"Hackathon",
			"Project",
			"Event",
		]

		const onOpenRegForm = () => ctx.emit('update:showRegForm', true)
		return {
			onOpenRegForm,
			messages,
			navigate,
		}
	}
}
</script>

<style scoped>
@import url('../buttons.css');


.event-name {
	font-size: 5.5em;
	font-family: "DM Serif Display", serif;
	width: fit-content;
	display: flex;
	flex-wrap: wrap;
}

.event-opp{
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
}

.event-description {
	width: 50%;
	font-weight: 300;
	/* font-size: 1.1em; */
	color: rgb(164, 164, 164);
}

.action{
	color: var(--primary);
	text-decoration: underline;
	cursor: pointer;
}

@media (prefers-color-scheme: light) {
	.event-description{
		color: rgb(100, 100, 100);
	}
	.action {
		color: var(--primary-hard);
	}
}

.event-hot-buttons{
	display: flex;
	gap: 16px;
}

@media (max-width: 800px) {
	.event-description{
		width: 100%;
	}
}

@media (max-width: 450px) {
	.event-name {
		line-height: 1.2;
	}

	.event-hot-buttons{
		flex-wrap: wrap;
	}
}

.event-greeting{
	display: flex;
	flex-direction: column;
	gap: 16px;
}

</style>