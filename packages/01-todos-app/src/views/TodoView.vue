<script setup>
import TodoCreator from '@/components/TodoCreator.vue';
import TodoItem from '@/components/TodoItem.vue';
import { Icon } from '@iconify/vue';
import { uid } from 'uid';
import { computed, ref, watch } from 'vue';

const todoList = ref([]);

//++ para observar de manera profundas los cambios del estado reactivo todoList
watch(
	todoList,
	() => {
		setTodoListLocalStorage();
	},
	{
		deep: true,
	}
);

const todoCompleted = computed(() => {
	return todoList.value.every((todo) => todo.isCompleted);
});

const setTodoListLocalStorage = () => {
	localStorage.setItem('Todo_List', JSON.stringify(todoList.value));
};

const getTodoListLocalStorage = () => {
	const savedTodoList = JSON.parse(localStorage.getItem('Todo_List'));

	if (savedTodoList) {
		todoList.value = savedTodoList;
	}
};

getTodoListLocalStorage();

const handlerNewTodo = (todo) => {
	todoList.value.push({
		id: uid(),
		todo,
		isCompleted: null,
		isEditing: null,
	});
	// console.log('Lista actualizada:', todoList.value);
	setTodoListLocalStorage();
};

const toggleTodoComplete = (todoPosc) => {
	todoList.value[todoPosc].isCompleted = !todoList.value[todoPosc].isCompleted;
};

const toggleEditTodo = (todoPosc) => {
	todoList.value[todoPosc].isEditing = !todoList.value[todoPosc].isEditing;
};

const updateTodo = (todoVal, todoPosc) => {
	todoList.value[todoPosc].todo = todoVal;
};

const deleteTodo = (todoId) => {
	todoList.value = todoList.value.filter((todo) => todo.id !== todoId);
};
</script>

<template>
	<main>
		<h1>Create todo</h1>
		<TodoCreator @create-todo="handlerNewTodo" />
		<ul class="todoList" v-if="todoList.length > 0">
			<TodoItem
				:todo="todo"
				:index="index"
				@toggle-complete="toggleTodoComplete"
				@edit-todo="toggleEditTodo"
				@update-todo="updateTodo"
				@delete-todo="deleteTodo"
				v-for="(todo, index) in todoList" />
		</ul>
		<p class="todoMsg" v-else>
			<Icon icon="noto-v1:sad-but-relieved-face" width="22" />
			<span>You have no todo's to complete! add one!</span>
		</p>

		<p class="todoMsg" v-if="todoCompleted && todoList.length > 0">
			<Icon icon="noto-v1:party-popper" />
			<span>You have completed all your todos!</span>
		</p>
	</main>
</template>

<style lang="scss" scoped>
main {
	display: flex;
	flex-direction: column;
	max-width: 500px;
	width: 100%;
	margin: 0 auto;
	padding: 40px 16px;

	h1 {
		margin-bottom: 16px;
		text-align: center;
	}

	.todoList {
		display: flex;
		flex-direction: column;
		list-style: none;
		margin-top: 24px;
		gap: 20px;
	}

	.todoMsg {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin-top: 24px;
	}
}
</style>
