import { ref } from 'vue';
import { AfterFetchContext, useFetch } from '@vueuse/core';

import { Movie, MovieResponse } from '../models/movie.model';
import { mapRawToMovie } from '../helpers/functions';

export const getMovies = () => {
  const urlRef = ref('');
  const movies = ref<Movie[]>([]);
  const total = ref<number>(0);

  const { isFetching, error, execute } = useFetch(urlRef, {
    afterFetch(ctx: AfterFetchContext<MovieResponse>) {
      movies.value = ctx.data.data.map(mapRawToMovie);
      total.value = ctx.data?.totalAmount;
      return ctx;
    },
    immediate: false,
  }).json<MovieResponse>();

  const fetchMovies = async (url: string) => {
    urlRef.value = url;
    await execute();
  };

  return { movies, total, loading: isFetching, error, fetchMovies };
};
