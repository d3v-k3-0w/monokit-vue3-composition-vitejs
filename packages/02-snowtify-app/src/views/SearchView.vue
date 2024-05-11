<script setup>
import CategorySelect from '@/components/CategorySelect.vue';
</script>
<template>
	<div class="p-8">
		<button
			type="button"
			class="text-white text-2xl font-semibold hover:underline cursor-pointer">
			Podcasts to make you smarter
		</button>

		<div class="py-1.5"></div>

		<div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
			<CategorySelect category="PodCasts" image="https://picsum.photos/id/40/300/300" />
			<CategorySelect category="Audibooks" image="https://picsum.photos/id/45/300/300" />
			<CategorySelect category="Made For You" image="https://picsum.photos/id/76/300/300" />
			<CategorySelect category="New Release" image="https://picsum.photos/id/26/300/300" />
			<CategorySelect category="New Release" image="https://picsum.photos/id/16/300/300" />
			<CategorySelect category="PodCasts" image="https://picsum.photos/id/12/300/300" />
			<CategorySelect category="Audibooks" image="https://picsum.photos/id/10/300/300" />
			<CategorySelect category="Made For You" image="https://picsum.photos/id/89/300/300" />
			<CategorySelect category="New Release" image="https://picsum.photos/id/26/300/300" />
			<CategorySelect category="New Release" image="https://picsum.photos/id/16/300/300" />
			<CategorySelect category="PodCasts" image="https://picsum.photos/id/67/300/300" />
			<CategorySelect category="Audibooks" image="https://picsum.photos/id/55/300/300" />
			<CategorySelect category="Made For You" image="https://picsum.photos/id/87/300/300" />
			<CategorySelect category="New Release" image="https://picsum.photos/id/26/300/300" />
			<CategorySelect category="New Release" image="https://picsum.photos/id/16/300/300" />
			<CategorySelect category="PodCasts" image="https://picsum.photos/id/16/300/300" />
			<CategorySelect category="Audibooks" image="https://picsum.photos/id/120/300/300" />
			<CategorySelect category="Made For You" image="https://picsum.photos/id/71/300/300" />
			<CategorySelect category="New Release" image="https://picsum.photos/id/22/300/300" />
			<CategorySelect category="New Release" image="https://picsum.photos/id/18/300/300" />
			<CategorySelect category="PodCasts" image="https://picsum.photos/id/47/300/300" />
			<CategorySelect category="Audibooks" image="https://picsum.photos/id/41/300/300" />
			<CategorySelect category="Made For You" image="https://picsum.photos/id/79/300/300" />
			<CategorySelect category="New Release" image="https://picsum.photos/id/66/300/300" />
			<CategorySelect category="New Release" image="https://picsum.photos/id/56/300/300" />
			<CategorySelect category="PodCasts" image="https://picsum.photos/id/78/300/300" />
			<CategorySelect category="Audibooks" image="https://picsum.photos/id/24/300/300" />
			<CategorySelect category="Made For You" image="https://picsum.photos/id/70/300/300" />
			<CategorySelect category="New Release" image="https://picsum.photos/id/29/300/300" />
			<CategorySelect category="New Release" image="https://picsum.photos/id/119/300/300" />
		</div>
	</div>
</template>
