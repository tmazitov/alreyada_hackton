<template>
	<transition name="inside">
		<div class="nav-bar" v-if="show">
			<div class="nav-bar__item" @click="navigate('home')">Home</div>
			<div class="nav-bar__item" @click="navigate('map')">Map</div>
			<div class="nav-bar__item" @click="navigate('speakers')">Speakers</div>
		</div>
	</transition>
</template>

<script lang="ts">
import navigate from '../type/navigator';
import { computed } from 'vue';

export default {
	name: "NavBarCont",
	props: {
		show: {
			type:Boolean,
			default: false,
		}
	},
	setup(props){
		const show = computed(() => props.show)

		return {
			navigate,
			show,
		}
	}
}
</script>

<style scoped>
.nav-bar {
	position : fixed;
	height: 40px;
	background: var(--background);	
	width: 100%;
	top: 0;
	left: 0;
	right: 0;

	border-bottom: 3px dashed var(--primary);
	display: flex;
	flex-direction: row;
	gap: 10px;
	justify-content: space-around;
}

.nav-bar__item {
	color: white;
	height: 100%;
	display: flex;
	cursor: pointer;
	user-select: none;
	justify-content: center;
	align-items: center;
}

.inside-enter-active{
	animation: inside .3s ease-out;
}

.inside-leave-active{
	animation: inside .3s ease-out reverse;
}

@keyframes inside{
	from {
		top : -40px;
	}

	to {
		top : 0;
	}
}
</style>