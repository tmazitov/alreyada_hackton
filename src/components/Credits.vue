<template>
<div class="credits"> 
	<div class="content">
		<div class="name">Designed by Timur Mazitov</div>
		<div class="purpose">For Al Reyada Sustainability and Culture Seminar 2024</div>
		<div class="earth">
			<span class="iconify" data-icon="fluent:earth-48-regular" data-width="64" data-height="64"></span>
		</div>
	</div>
</div>
</template>

<script lang="ts">
export default {
	name: 'Credits',
}
</script>

<style scoped>
.credits{
	background: #363836;
	color: var(--font-color);
	height: 96px;
	position: relative;
}

.earth{
	position: absolute;
	top: 16px;
	right: 15%;
	width: fit-content;
	height: fit-content;
	display: flex;
	align-items: center;
	color: var(--primary);
	animation: spin 15s linear infinite;
}

@keyframes spin {
	from {
		transform: rotate(0deg);
	}	
	to {
		transform: rotate(360deg);
	}
}

@media (max-width: 450px) {
	.earth{
		right: 16px;
	}
}

.content{
	display: flex;
	flex-direction: column;
	gap: 4px;
	height: 100%;
	padding-bottom: 0;
}

.name{
	font-size: 0.9em;
	font-weight: 600;
}

.purpose{
	font-size: 0.6em;
}


</style>