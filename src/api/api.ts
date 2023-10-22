import { ref } from 'vue';
import { AfterFetchContext, useFetch } from '@vueuse/core';

import { Movie, MovieResponse } from '../models/movie.model';
import { mapRawToMovie } from '../helpers/functions';

export const getMovies = () => {
  const urlRef = ref('');
  const movieList = ref<Movie[]>([]);
  const total = ref<number>(0);

  const { isFetching, error, execute } = useFetch(urlRef, {
    afterFetch(ctx: AfterFetchContext<MovieResponse>) {
      movieList.value = ctx.data.data.map(mapRawToMovie);
      total.value = ctx.data?.totalAmount;
      return ctx;
    },
    immediate: false,
  }).json<MovieResponse>();

  const fetchMovieList = async (url: string) => {
    urlRef.value = url;
    await execute();
  };

  return { movieList, total, loadingMovieList: isFetching, errorMovieList: error, fetchMovieList };
};

export const getMovie = () => {
  const urlRef = ref('');
  const movie = ref<Movie | null>(null);

  const { isFetching, error, execute } = useFetch(urlRef, {
    afterFetch(ctx: AfterFetchContext<MovieResponse>) {
      movie.value = mapRawToMovie(ctx.data);
      return ctx;
    },
    immediate: false,
  }).json<MovieResponse>();

  const fetchMovie = async (url: string) => {
    urlRef.value = url;
    await execute();
  };

  return { movie, loadingMovie: isFetching, errorMovie: error, fetchMovie };
};
