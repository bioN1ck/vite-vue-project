<script setup lang="ts">
import { reactive, computed, ref, onMounted, onBeforeUnmount } from 'vue';

type Props = {
  src: string;
  alt?: string;
};
const props = defineProps<Props>();

const imgRef = ref(null);
const state = reactive({
  observer: null,
  intersected: false,
  loaded: false,
});
const loadingImg = 'src/assets/loading-img.png';

const srcImage = computed(() => {
  return state.intersected && props.src ? props.src : loadingImg;
});

const load = () => {
  if (imgRef.value && imgRef.value.getAttribute('src') !== loadingImg) {
    state.loaded = true;
  }
};

onMounted(() => {
  state.observer = new IntersectionObserver((entries) => {
    const image = entries[0];
    if (image.isIntersecting) {
      state.intersected = true;
      state.observer.disconnect();
    }
  });

  state.observer.observe(imgRef.value);
});

onBeforeUnmount(() => {
  state.observer.disconnect();
});
</script>

<template>
  <img ref="imgRef" :src="srcImage" :alt="alt" @load="load" />
</template>
