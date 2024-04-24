<script setup></script>

<template>
	<button>
		<slot>Create</slot>
	</button>
</template>

<style lang="scss" scoped>
button {
	padding: 8px 16px;
	background-color: hsla(160, 100%, 37%, 0.2);
	color: var(--texto);
	font-family: 'Jetbrains Mono';
	border: 1px solid green;
}
</style>
