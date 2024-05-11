import HomeView from '@/views/HomeView.vue';
import LibraryView from '@/views/LibraryView.vue';
import SearchView from '@/views/SearchView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: HomeView,
		},
		{
			path: '/search',
			component: SearchView,
		},
		{
			path: '/library',
			component: LibraryView,
		},
	],
});

export default router;
