<template>
	<div class="page">
		<div class="content">
			<div class="content-header">
				Event Map
			</div>
			<div class="map-elements">
				<div class="map-element" v-for="(ele,index) in map"
					:key="ele">
					<div class="map-element__header">
						{{ ele }}
					</div>
					<div class="map-element__number">
						{{ index + 1 }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MapPage',
	setup(){
		const map = [
			"Eco-Move",
			"Eco-Inbox",
			"Eco-bite",
			"Eco-waste",
			"Eco-leak",
			"Eco-save",
		]

		return {
			map
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
	height: 200px;
	display: flex;
	border: 1px solid var(--font-color);
	border-radius: 16px;
	position: relative;
	padding: 16px;
	box-sizing: border-box;
}

@media (max-width: 800px){
	.map-elements{
		grid-template-columns: repeat(2, 1fr);
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