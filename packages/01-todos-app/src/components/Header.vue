<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
	<header>
		<nav class="contained">
			<div class="branding">
				<img src="@/assets/logo.svg" alt="logo" />
				<h1>TODOS</h1>
			</div>
			<ul class="navRoutes">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
header {
	background-color: var(--fondo-suave);
	nav {
		display: flex;
		align-items: center;
		padding: 25px 16px;

		.branding {
			display: flex;
			align-items: center;
			gap: 8px;
			img {
				max-width: 50px;
			}

			h1 {
				font-size: 14px;
			}
		}

		.navRoutes {
			display: flex;
			flex: 1;
			justify-content: flex-end;
			gap: 12px;
			list-style: none;

			a {
				text-decoration: none;
				color: inherit;
			}
		}
	}
}
</style>
