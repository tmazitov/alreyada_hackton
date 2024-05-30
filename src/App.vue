<template>
	<RegistrationFormModal v-model:show="showRegForm"/>
	<HomePage v-model:showRegForm="showRegForm"/>
	<EventsPage/>
	<MapPage/>
	<SpeakersPage/>
	<Credits/>
</template>

<script lang="ts">
import { ref } from 'vue';
import EventsPage from './pages/EventsPage.vue';
import HomePage from './pages/HomePage.vue'
import MapPage from './pages/MapPage.vue'
import SpeakersPage from './pages/SpeakersPage.vue';
import RegistrationFormModal from './components/RegistrationFormModal.vue';
import Credits from './components/Credits.vue';

export default {
	name: 'App',
	components: {
		Credits,
		MapPage,
		HomePage,
		EventsPage,
		SpeakersPage,
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