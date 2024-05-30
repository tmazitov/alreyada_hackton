<template>
	<div class="page">
		<div class="content">
			<div class="content-header">Our Speakers</div>
			<div class="speakers-container">
				<div class="speaker" v-for="speaker in speakers" :key="speaker.name">
					<div class="speaker__photo">
						<van-icon name="user-circle-o" size="3em"/>
					</div>
					<div class="speaker__info">
						<div class="speaker__name">
							{{ speaker.name }}
						</div>
						<div class="speaker__university">
							{{ speaker.edu }}
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>
</template>

<script lang="ts">

type Speaker = {
	name: string;
	edu: string;
}

export default {
	name : "SpeakersPage",
	setup(){
		const speakers:Array<Speaker> = [
			{name: "Shama Alnuaimi", edu: "United Arab Emirates University"},
			{name: "Asma Alnaqbi", edu: "Khalifa University"},
			{name: "Maitha Alameri", edu: "Zayed University"},
			{name: "Hamda Almenhali", edu: "Zayed University"},
			{name: "Nimesh Kunwar", edu: "42 Abu Dhabi"},
		] 

		return {
			speakers
		}
	}
}
</script>

<style scoped>
.content{
	padding: 10%;
	gap: 32px;
	
}

@media (min-width: 450px) {
	.content{
		align-items: center;
	}
	.speaker:hover > .speaker__info > .speaker__name {
		color: var(--primary);
	}
}

.speaker{
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 16px;
	align-items: center;

}

.speaker__name{
	font-size: 1.5em;
	font-weight: 300;
	cursor: pointer;
	transition: color 0.3s;
}
.speakers-container{
	width: fit-content;
	display: flex;
	flex-direction: column;
	gap: 16px;
	justify-content: center;
}

.speaker__photo{
	width: 3.4em;
	height: 3.4em;
	border-radius: 50%;
	background: var(--background);
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1.5px solid var(--font-color);
	transition: border-color 0.3s;
}

.speaker__university{
	font-size: 0.8em;
	font-weight: 300;
	color: gray
}

.speaker:hover > .speaker__photo{
	border: 1.5px solid var(--primary);
}

.speaker__info{
	display: flex;
	flex-direction: column;
}
</style>