import { computed, ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { LocationQuery, useRoute, useRouter } from 'vue-router';

import { getMovie, getMovies } from '../api/api';
import { RadioBtnType } from '../models/movie.model';
import { SEARCH_BY_BUTTONS, SORT_BY_BUTTONS } from '../helpers/constants';

export type SearchParams = {
  sortBy?: string;
  searchBy?: string;
  limit?: string;
  search?: string;
};

export const BASE_URL = 'http://localhost:4000/movies';

export const useMoviesStore = defineStore('movies', () => {
  const route = useRoute();
  const router = useRouter();

  const sortBy = ref<RadioBtnType>(SORT_BY_BUTTONS[0]);
  const searchBy = ref<RadioBtnType>(SEARCH_BY_BUTTONS[0]);
  const searchQuery = ref('');

  const url = computed(() => {
    const params: SearchParams = {
      sortBy: sortBy.value.value,
      searchBy: searchBy.value.value,
      search: searchQuery.value,
      limit: '12',
    };
    const query = new URLSearchParams(params).toString();
    return `${BASE_URL}?${query}`;
  });

  const { movieList, total, loadingMovieList, errorMovieList, fetchMovieList } = getMovies();
  const { movie, loadingMovie, errorMovie, fetchMovie } = getMovie();

  watch(
    () => route.query,
    async (curr: LocationQuery, prev: LocationQuery) => {
      if (curr.search === undefined) {
        await router.push({ query: { search: '' } });
        return;
      }

      if (curr.search !== prev.search) {
        searchQuery.value = curr.search;
        await getMovieList();
      }
    }
  );

  const setSortBy = async (btn: RadioBtnType) => {
    sortBy.value = btn;
    await getMovieList();
  };
  const setSearchBy = async (btn: RadioBtnType) => {
    searchBy.value = btn;
    await getMovieList();
  };
  const setSearchQuery = async (text: string) => {
    await router.push({ query: { search: text } });
  };

  const navigateTo = async (path: string) => {
    await router.push({ path, query: route.query });
  };

  const getMovieList = async () => await fetchMovieList(url.value);
  const getMovieById = async (id: string) => fetchMovie(`${BASE_URL}/${id}`);

  return {
    movie,
    loadingMovie,
    errorMovie,
    movieList,
    total,
    loadingMovieList,
    errorMovieList,
    sortBy,
    searchBy,
    searchQuery,
    getMovieList,
    getMovieById,
    setSortBy,
    setSearchBy,
    setSearchQuery,
    navigateTo,
  };
});
