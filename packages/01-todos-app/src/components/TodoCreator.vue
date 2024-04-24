<script setup>
import { defineEmits, reactive } from 'vue';
import Button from './Button.vue';

const emit = defineEmits(['create-todo']);

const todoState = reactive({
	todo: '',
	invalid: null,
	errMsg: '',
});

const createTodo = () => {
	todoState.invalid = null;

	if (todoState.todo !== '') {
		emit('create-todo', todoState.todo);
		todoState.todo = '';
		return;
	}

	todoState.invalid = true;
	todoState.errMsg = 'Todo value cannot be empty';
};
</script>
<template>
	<div class="inputWrap" :class="{ inputErr: todoState.invalid }">
		<input type="text" v-model="todoState.todo" />
		<Button @click="createTodo" />
	</div>
	<p v-show="todoState.invalid" class="errMsg">{{ todoState.errMsg }}</p>
</template>

<style lang="scss" scoped>
.inputWrap {
	display: flex;
	transition: 250ms ease;
	border: 2px solid #41b080;

	&.inputErr {
		border: 1px solid red;
	}

	&:focus-within {
		box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1);
	}

	input {
		width: 100%;
		padding: 8px 6px;
		border: none;

		&:focus {
			outline: none;
		}
	}
}

.errMsg {
	margin-top: 6px;
	font-size: 12px;
	text-align: center;
	color: red;
}
</style>
