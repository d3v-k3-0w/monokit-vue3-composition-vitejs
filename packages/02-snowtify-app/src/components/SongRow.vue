<script setup>
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import Heart from 'vue-material-design-icons/Heart.vue';
import { onMounted, ref, toRefs } from 'vue';
import { useSongStore } from '@/stores/song';
import { storeToRefs } from 'pinia';

const useSong = useSongStore();
const { isPlaying, currentTrack } = storeToRefs(useSong);

let isHover = ref(false);
let isTrackTime = ref(null);

const props = defineProps({
	accTrack: Object,
	accArtist: Object,
	accIndex: Number,
});

const { accTrack, accArtist, accIndex } = toRefs(props);

onMounted(() => {
	const audio = new Audio(accTrack.value.path);
	audio.addEventListener('loadedmetadata', () => {
		const duration = audio.duration;
		const minutes = Math.floor(duration / 60);
		const seconds = Math.floor(duration % 60);

		isTrackTime.value = `${minutes}:${seconds.toString().padStart(2, '0')}`;
	});
});
</script>
<template>
	<li
		class="flex items-center justify-between rounded-md hover:bg-[#2A2929]"
		@mouseenter="isHover = true"
		@mouseleave="isHover = false">
		<div class="flex items-center w-full py-1.5">
			<div v-if="isHover" class="w-[40px] ml-[14px] mr-[6px] cursor-pointer">
				<Play
					v-if="!isPlaying"
					fillColor="#FFFFFF"
					:size="25"
					@click="useSong.playOrPauseThisSong(accArtist, accTrack)" />
				<Play
					v-else-if="isPlaying && currentTrack.name !== accTrack.name"
					fillColor="#FFFFFF"
					:size="25"
					@click="useSong.loadSong(accArtist, accTrack)" />
				<Pause v-else fillColor="#FFFFFF" :size="25" @click="useSong.playOrPauseSong()" />
			</div>
			<div v-else class="text-white font-semibold w-[40px] ml-5">
				<span
					:class="{ 'text-green-500': currentTrack && currentTrack.name === accTrack.name }">
					{{ accIndex }}
				</span>
			</div>
			<div>
				<div
					:class="{ 'text-green-500': currentTrack && currentTrack.name === accTrack.name }"
					class="text-white font-semibold">
					{{ accTrack.name }}
				</div>
				<div class="text-sm font-semibold text-gray-400">{{ accArtist.name }}</div>
			</div>
		</div>
		<div class="flex items-center">
			<button type="button" v-if="isHover">
				<Heart fillColor="#1BD760" :size="22" />
			</button>
			<div v-if="isTrackTime" class="text-xs mx-5 text-gray-400">
				{{ isTrackTime }}
			</div>
		</div>
	</li>
</template>
