<script setup lang="ts">
import { onMounted, watch } from 'vue';

import { useMoviesStore } from '../store/movies';

type Props = { id: string };
const props = defineProps<Props>();

const store = useMoviesStore();

onMounted(() => store.getMovieById(props.id));
watch(
  () => props.id,
  (nextId) => store.getMovieById(nextId)
);
</script>

<template>
  <div class="loading" v-if="store.loadingMovie">Loading...</div>
  <div class="error" v-else-if="store.errorMovie">Something went wrong...</div>

  <div class="movie-details" v-else-if="store.movie !== null">
    <img :src="store.movie.imageUrl" alt="" />
    <div>
      <div class="movie-details__header">
        <h2>{{ store.movie!.movieName }}</h2>
        <div>{{ store.movie!.rating }}</div>
      </div>
      <div class="movie-details__genres">
        {{ store.movie!.relevantGenres.join(', ') }}
      </div>
      <div class="movie-details__metadata">
        <div class="movie-details__metadata-item">{{ store.movie!.releaseYear }} <span>year</span></div>
        <div class="movie-details__metadata-item">{{ store.movie!.duration }} <span>min</span></div>
      </div>
      <p class="movie-details__description">
        {{ store.movie!.description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin fallback-screen {
  height: 455px;
  display: flex;
  //flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 32px;
}

.loading {
  @include fallback-screen;
}
.error {
  @include fallback-screen;
  color: #f65261;
}

.movie-details {
  display: flex;
  color: #ffffff;
}
.movie-details img {
  width: 322px;
  min-width: 322px;
  height: 455px;
  margin-right: 54px;
}
.movie-details__header {
  display: flex;
  align-items: center;
  padding-top: 1rem;
}
.movie-details__header h2 {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 1px;
  margin-right: 24px;
}
.movie-details__header div {
  width: 60px;
  min-width: 60px;
  height: 60px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  box-sizing: border-box;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a1e66f;
}
.movie-details__genres {
  opacity: 0.5;
  font-size: 14px;
  margin-bottom: 32px;
}
.movie-details__metadata {
  display: inline-flex;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 28px;
}
.movie-details__metadata-item {
  color: #f65261;
  margin-right: 40px;
}
.movie-details__metadata-item span {
  font-size: 14px;
  color: #ffffff;
  opacity: 0.4;
}
.movie-details__description {
  opacity: 0.8;
  font-size: 20px;
  font-weight: 300;
}
</style>
