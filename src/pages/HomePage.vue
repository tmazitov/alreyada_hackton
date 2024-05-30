<template>
	<div class="page">
		<div class="content">
			<div class="event-greeting">
				<div class="event-name">
					Al Reyada Event!
				</div>
				<div class="event-description">
					Welcome to the Al Reyada Event! This is a sample event page.
				</div>
			</div>

			<div class="event-hot-buttons">
				<van-button class="button primary" @click="onOpenRegForm">
					Registration
				</van-button>
				<van-button class="button outlined" icon="notes-o">
					Events
				</van-button>
				<van-button class="button outlined" icon="friends-o">
					Spickers
				</van-button>
				<van-button class="button outlined">
					More
				</van-button>
			</div>

			<div class="event-opp">
				<InfiniteScrollingLine :messages="messages"/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import InfiniteScrollingLine from '../components/InfiniteScrollingLine.vue';

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
			"Hackton",
			"Project",
			"Cool",
			"Student",
			"Event",
		]

		const onOpenRegForm = () => ctx.emit('update:showRegForm', true)

		return {
			onOpenRegForm,
			messages
		}
	}
}
</script>

<style scoped>
@import url('../buttons.css');


.event-name {
	font-size: 5.5em;
	font-family: "DM Serif Display", serif;
	width: fit-content
}

.event-opp{
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
}

.event-description {

	font-weight: 300;
	font-size: 1.3em;
	color: rgb(164, 164, 164);
}

.event-hot-buttons{
	display: flex;
	gap: 16px;
}


@media (max-width: 450px) {
	.event-name {
		line-height: 1.2;
	}

	.event-hot-buttons{
		flex-wrap: wrap;
	}
}

</style>