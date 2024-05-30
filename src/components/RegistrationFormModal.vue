<template>
	<van-overlay :show="show" @click="closeHandler">
		<div class="form-wrapper" @click.stop>
			<div class="form">
				<div class="form-header">
					<div class="form-header__back" @click="closeHandler">
						<van-icon name="arrow-left" size="24"/>
					</div>
					<div class="form-header__title">
						Registration
					</div>
				</div>
				<div class="fields">
					<BaseInput v-model:value="form.name" label="Name" placeholder="Your name" autofocus/>
					<BaseInput v-model:value="form.email" label="Email"  placeholder="Your email"/>
					<div class="form-allow">
						<van-checkbox v-model="form.allow" shape="round" checked-color="#07c160">
							Сonsent to the processing of personal data
						</van-checkbox>
					</div>
				</div>


				<BaseButton label="Submit"/>
			</div>
		</div>
	</van-overlay>
</template>

<script lang="ts">
import { computed, reactive } from 'vue';
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';

type Form = {
	name: string,
	email: string,
	allow: boolean,
}

export default {
	name: 'RegistrationFormModal',
	components: {
		BaseInput,
		BaseButton
	},
	model: {
		prop: 'show',
		event: 'update:show',
	},
	props: {	
		show: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, ctx) {
		const show = computed(() => props.show)
		const form = reactive<Form>({
			name: "",
			email: "",
			allow: false,
		})
		const closeHandler = () => {
			ctx.emit('update:show', false)
		}

		return {
			form,
			show,
			closeHandler,
		}
	}
};
</script>


<style>
.form-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

.form {
	width: 360px;
	height: 450px;
	background-color: var(--background);
	border-radius: 16px;
	
	display:flex;
	flex-direction: column;
	gap: 20px;
	justify-content: space-between;

	padding: 16px;
	box-sizing: border-box;
}

@media (max-width: 450px){
	.form {
		width: calc(100% - 48px);
	}
	.form-header__back{
		width: 2.4em;
		height: 100%;
	}
}

.form-header{
	display: flex;
	gap: 16px;
	align-items: center;
}

.form-header__title{
	font-size: 2.4em;
	font-family: "DM Serif Display", serif;
	width: fit-content;
}

.form-allow{
	--van-checkbox-label-color: var(--font-color);
	font-size: 0.9em;
}

.form-header__back{
	display:flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	cursor: pointer;
	background: transparent;
	border-radius: 16px;
	transition: background-color 0.3s;
	padding: 4px;
	box-sizing: border-box;
}

.form-header__back:hover {
	background-color: var(--background-light);
}

.fields{
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding-bottom: 40px;
}
</style>