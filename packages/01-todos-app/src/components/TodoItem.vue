<script setup>
import { Icon } from '@iconify/vue';

const accs = defineProps({
	todo: {
		type: Object,
		required: true,
	},
	index: {
		type: Number,
		required: true,
	},
});

defineEmits(['toggle-complete', 'edit-todo', 'update-todo', 'delete-todo']);
</script>

<template>
	<li>
		<input
			type="checkbox"
			:checked="todo.isCompleted"
			@input="$emit('toggle-complete', index)" />

		<div class="todoContent">
			<input
				type="text"
				v-if="todo.isEditing"
				:value="todo.todo"
				@input="$emit('update-todo', $event.target.value, index)" />
			<span :class="{ completedTodo: todo.isCompleted }" v-else>
				{{ todo.todo }}
			</span>
		</div>

		<div class="todoActions">
			<Icon
				v-if="todo.isEditing"
				icon="ph:check-circle"
				class="icon"
				color="#41b080"
				width="22"
				@click="$emit('edit-todo', index)" />
			<Icon
				icon="ph:pencil-fill"
				class="icon"
				color="#FB923C"
				width="22"
				@click="$emit('edit-todo', index)" />
			<Icon
				icon="ph:trash"
				class="icon"
				color="#f95e5e"
				width="22"
				@click="$emit('delete-todo', todo.id)" />
		</div>
	</li>
</template>

<style lang="scss" scoped>
li {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 16px 8px;
	border-radius: 8px;
	background-color: var(--fondo-suave);
	box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -2px rgba(255, 255, 255, 0.2);

	.todoActions {
		display: flex;
		gap: 6px;
		opacity: 1;
		transition: 150ms ease-in-out;

		.icon {
			cursor: pointer;
		}
	}

	input[type='checkbox'] {
		appearance: none;
		width: 20px;
		height: 20px;
		background-color: #fff;
		border-radius: 50%;
		box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.1),
			0 2px 4px -2px rgba(255, 255, 255, 0.2);

		&:checked {
			background-color: #41b080;
		}
	}

	.todoContent {
		flex: 1;

		.completedTodo {
			text-decoration: line-through;
		}

		input[type='text'] {
			width: 100%;
			padding: 2px 6px;
			border: 2px solid #41b080;
		}
	}

	// Consulta de medios para pantallas más grandes (por ejemplo, 768px)
	@media (min-width: 768px) {
		.todoActions {
			opacity: 0;
		}

		&:hover {
			.todoActions {
				opacity: 1;
			}
		}
	}
}
</style>
