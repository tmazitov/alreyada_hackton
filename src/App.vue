<template>
	<RegistrationFormModal v-model:show="showRegForm"/>
	<HomePage v-model:showRegForm="showRegForm"/>
	<EventsPage/>
	<MapPage/>
	<SpeakersPage/>
	<Credits/>
	<NavBarCont :show="showNavBar"/>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import EventsPage from './pages/EventsPage.vue';
import HomePage from './pages/HomePage.vue'
import MapPage from './pages/MapPage.vue'
import SpeakersPage from './pages/SpeakersPage.vue';
import RegistrationFormModal from './components/RegistrationFormModal.vue';
import Credits from './components/Credits.vue';
import NavBarCont from './components/NavBarCont.vue';

export default {
	name: 'App',
	components: {
		Credits,
		MapPage,
		HomePage,
		EventsPage,
		SpeakersPage,
		NavBarCont,
		RegistrationFormModal,
	},
	setup() {
		const showRegForm = ref(false);
		const showNavBar = ref(false);

		const scrollHandler = () => {
			const element = document.querySelector('.event-hot-buttons');
			if (!element)
				return
			const elementRect = element.getBoundingClientRect();
			if (elementRect.top < 0 && showNavBar.value === false) {
				showNavBar.value = true;
			} else if (elementRect.top >= 0 && showNavBar.value === true) {
				showNavBar.value = false;
			}
		};

		onMounted(() => {
			document.addEventListener('scroll', scrollHandler)
		});
		onBeforeUnmount(() => {
			document.removeEventListener('scroll', scrollHandler)
		});

		return {
			showRegForm,
			showNavBar,
		}
	}
}
</script>