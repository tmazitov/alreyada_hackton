<template>
	<RegistrationFormModal v-model:show="showRegForm"/>
	<HomePage v-model:showRegForm="showRegForm"/>
	<EventsPage/>
	<MapPage/>
</template>

<script lang="ts">
import { ref } from 'vue';
import EventsPage from './pages/EventsPage.vue';
import HomePage from './pages/HomePage.vue'
import MapPage from './pages/MapPage.vue'
import RegistrationFormModal from './components/RegistrationFormModal.vue';

export default {
	name: 'App',
	components: {
		MapPage,
		HomePage,
		EventsPage,
		RegistrationFormModal,
	},
	setup() {
		const showRegForm = ref(false);
	
		return {
			showRegForm
		}
	}
}
</script>