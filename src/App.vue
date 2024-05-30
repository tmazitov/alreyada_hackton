<template>
	<RegistrationFormModal v-model:show="showRegForm"/>
	<HomePage v-model:showRegForm="showRegForm"/>
	<EventsPage/>
</template>

<script lang="ts">
import { ref } from 'vue';
import EventsPage from './pages/EventsPage.vue';
import HomePage from './pages/HomePage.vue'
import RegistrationFormModal from './components/RegistrationFormModal.vue';

export default {
	name: 'App',
	components: {
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