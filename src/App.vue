<template>
	<HomePage/>
	<EventsPage/>
</template>

<script lang="ts">
import EventsPage from './pages/EventsPage.vue';
import HomePage from './pages/HomePage.vue'

export default {
	name: 'App',
	components: {
		HomePage,
		EventsPage,
	}
}
</script>