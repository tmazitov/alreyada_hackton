<template>
  <div class="scroll-container">
    <div class="scroll-content" :style="animationStyle">
      <span v-for="(message, index) in repeatedMessages" :key="index" class="scroll-message">
        {{ message }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
	name: 'InfiniteScrollingLine',
	props: {
		messages: {
		type: Array as () => string[],
		required: true
		}
	},
	setup(props:any) {
		const repeatedMessages = computed(() => {
			return [...Array(20).keys()].flatMap(() => props.messages);
		});

		const animationStyle = computed(() => {
			return {
				animation: `scroll ${props.messages.length * 10}s linear infinite`
			};
		});

		return {
			repeatedMessages,
			animationStyle
		};
	}
};
</script>

<style scoped>
	.scroll-container {
		overflow: hidden;
		white-space: nowrap;
		width: 100%;
		box-sizing: border-box;
		height: 2rem;
		/* background: rgba(255,221,225,1); */
		background: var(--gradient);
		color: #323232;
		border: 1px solid #ccc; /* Optional: for better visibility */
	}

	.scroll-content {
		padding: 0.3em;
		display: inline-block;
		white-space: nowrap;
	}

	.scroll-message {
		display: inline-block;
		padding: 0 1rem;
	}
</style>
