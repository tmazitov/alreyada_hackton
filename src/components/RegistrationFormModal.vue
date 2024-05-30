<template>
	<van-overlay :show="show" @click="closeHandler">
		<div class="form-wrapper" @click.stop>
			<div class="form-container">

				<!-- Registration Form -->

				<div class="form" v-if="!data.isSubmitted">
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
							<van-checkbox v-model="form.allow" shape="round" checked-color="var(--primary-hard)">
								Сonsent to the processing of personal data
							</van-checkbox>
						</div>
					</div>

					<BaseButton :disabled="!isFormValid" label="Submit" @click="submit"/>
				</div>
				
				<!-- Response wait -->
				
				<div class="form submitted" v-if="data.isSubmitted && !data.isSuccess">
					<van-loading color="var(--primary)" vertical size="128px">
						Please wait...
					</van-loading>	
				</div>

				<!-- Response success -->
				<transition name="fade">
					<div class="form" v-if="data.isSubmitted && data.isSuccess">
						<div class="form-header">
							<div class="form-header__title">
								Success!
							</div>
						</div>

						<div class="form-content">
							<div class="form-content__sign">
								<van-icon name="success" size="64" color="var(--primary)"/>
							</div>
							<div class="form-content__text">
								<div>Thank you for your registration!</div>
								<div>We will so glad to see you on our event!</div>
							</div>
						</div>

						<BaseButton label="Home page" @click="closeHandler"/>
					</div>
				</transition>
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
		const data = reactive<{isSubmitted:boolean, isSuccess:boolean}>({
			isSubmitted: false,
			isSuccess: false,
		})
		const form = reactive<Form>({
			name: "",
			email: "",
			allow: false,
		})
		const isFormValid = computed(() => {
			return form.name.length > 0 && form.email.length > 0 && form.allow
		})
		const closeHandler = () => {
			ctx.emit('update:show', false)
		}

		const submit = () => {
			data.isSubmitted = true
			setTimeout(() => data.isSuccess = true, 1400);
		}

		return {
			form,
			show,
			data,
			isFormValid,
			closeHandler,
			submit,
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

.form-container{
	width: 360px;
	height: 360px;
	background-color: var(--background);
	border-radius: 16px;
	
}

.form {
	width: 100%;
	height: 100%;
	display:flex;
	flex-direction: column;
	gap: 20px;
	justify-content: space-between;

	padding: 16px;
	box-sizing: border-box;
}

.form.submitted{
	justify-content: center;
	align-items: center;
}

@media (max-width: 450px){
	.form-container {
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
	--van-checkbox-disabled-icon-color: var(--background);
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
}

.form-content{
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	justify-content: space-between;
}

.form-content__text{
	display: flex;
	gap: 10px;
	flex-direction: column;
	align-items: center;
}
</style>