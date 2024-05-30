<template>
	<div class="page">
		<div class="content">
			<div class="content-header">
				Event Map
			</div>
			<div class="map-elements">
				<div class="map-element"  v-for="(room,index) in roomArray" :key="room.name" 
					v-bind:class="{active : index == data.active}"
				>
					<div class="map-element__header">
						{{ room.name }}
					</div>
					<div class="map-element__number">
						{{ index + 1 }}
					</div>
					<div class="map-element__description">
						{{ room.description }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import rooms from '../data/rooms'
import Room from '../type/room';
import { reactive, onMounted, onBeforeUnmount } from 'vue';


export default {
	name: 'MapPage',
	setup(){
		const roomArray:Array<Room> = rooms.map((room) => new Room(room.name, room.description));

		const data = reactive<{active:number}>({
			active: -1,
		})

		const scrollHandler = () => {
			const elements = Array.from(document.querySelectorAll('.map-element'));
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
			roomArray,
			data,
		}
	}
};
</script>

<style scoped>
.content{
	padding: 10%;
	gap: 48px;
}
.map-elements{
	display:grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 16px;
}
.map-element{
	width: 100%;
	height: 100%;
	max-height: 250px;
	min-width: 200px;
	display: flex;
	flex-direction: column;
	border: 1px solid var(--font-color);
	border-radius: 16px;
	position: relative;
	padding: 16px;
	box-sizing: border-box;
	gap: 1em;
	transition: box-shadow .2s;
}

@media (max-width: 800px){
	.map-elements{
		grid-template-columns: repeat(2, 1fr);
	}
	.map-element:hover > .map-element__number {
		border-color: var(--font-color);
	}

	.map-element:hover {
		box-shadow: none;
	}
}
@media (max-width: 450px ){
	.map-elements{
		grid-template-columns: repeat(1, 1fr);
	}

}

.map-element__header{
	font-size: 1.6em;
	font-weight: 500;	
	height: fit-content;
	padding-left: 40px;
	line-height: 1.2;
}

.map-element__number{
	position: absolute;
	top: 16px;
	left: 16px;
	width: 24px;
	height: 24px;
	border: 3px solid gray;
	border-radius: 50%;

	display:flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	transition: border-color 0.2s;
}

.map-element:hover > .map-element__number {
	border-color: var(--primary);
}

.map-element:hover {
	box-shadow: 0 2px 15px var(--primary);
}


@media (max-width: 800px) {
	.page {
		height: 100%;
	}
	.opportunities-cards{
		flex-direction: column;
		align-items: center;
	}

	.map-element.active {
		box-shadow: 0 2px 15px var(--primary);
	}
	.map-element.active > .map-element__number {
		border-color: var(--primary);
	}

	.map-element:hover > .map-element__number {
		border-color: var(--font-color);
	}

	.map-element:hover {
		box-shadow: none;
	}
}
</style>