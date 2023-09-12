<script setup lang="ts">
import { Directive } from 'vue';
import { Movie } from '../models/movie.model';
// import LazyImage from './LazyImage.vue';

const vLazyload: Directive<HTMLImageElement> = {
  created: (el) => {
    el.src = 'src/assets/loading-img.png';
  },
  mounted: (el, binding) => {
    const observer = new IntersectionObserver((entries) => {
      const image = entries[0];
      if (image.isIntersecting) {
        el.src = binding.value;
        observer.disconnect();
      }
    });
    observer.observe(el);
  },
  unmounted: () => {
    // TODO: think about disconnecting observer somehow
  },
};

defineProps<{
  movie: Movie;
}>();
</script>

<template>
  <div class="movie-tile">
    <div>
      <img v-lazyload="movie.imageUrl" alt="" />
      <!--      <lazy-image :src="movie.imageUrl" />-->
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

<style scoped lang="scss">
.movie-tile {
  width: 322px;
  position: relative;
  color: #ffffff;

  img {
    width: 100%;
    height: 455px;
    margin-bottom: 17px;
  }

  &__description {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    opacity: 0.7;
    font-size: 14px;

    h3 {
      font-size: 18px;
      font-weight: 400;
      margin: 0 0 8px;
    }

    &-year {
      border: 1px solid #979797;
      border-radius: 4px;
      padding: 2px 14px;
    }
  }

  &__kebab-menu {
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

    div {
      width: 4px;
      height: 4px;
      background: #ffffff;
      border-radius: 50%;
      margin: 2px 0;
    }

    &:hover {
      opacity: 1;
    }
  }

  &:hover .movie-tile__kebab-menu {
    display: flex;
  }
}
</style>
