<script setup lang="ts">
export interface IMovie {
  id?: number;
  imageUrl: string;
  movieName: string;
  releaseYear: string;
  rating: number;
  duration: number;
  description: string;
  relevantGenres: string[];
}
defineProps<{
  movie: IMovie;
}>();
</script>

<template>
  <div class="movie-tile">
    <div>
      <img :src="movie.imageUrl" alt="" />
      <div class="movie-tile__description">
        <div>
          <h3>{{ movie.movieName }}</h3>
          <span>{{ movie.relevantGenres.join(', ') }}</span>
        </div>
        <div class="movie-tile__description-year">{{ movie.releaseYear }}</div>
      </div>
    </div>
    <div class="movie-tile__kebab-menu">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.movie-tile {
  width: 322px;
  position: relative;
  color: #ffffff;
}
.movie-tile img {
  width: 100%;
  height: 455px;
  margin-bottom: 17px;
}
.movie-tile__description {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  opacity: 0.7;
  font-size: 14px;
}
.movie-tile__description h3 {
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 8px;
}
.movie-tile__description-year {
  border: 1px solid #979797;
  border-radius: 4px;
  padding: 2px 14px;
}
.movie-tile__kebab-menu {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 16px;
  right: 16px;

  width: 36px;
  height: 36px;
  background: #2a202d;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.85;
}
.movie-tile__kebab-menu div {
  width: 4px;
  height: 4px;
  background: #ffffff;
  border-radius: 50%;
  margin: 2px 0;
}
.movie-tile__kebab-menu div:hover {
  opacity: 1;
}
.movie-tile:hover .movie-tile__kebab-menu {
  display: flex;
}
</style>
