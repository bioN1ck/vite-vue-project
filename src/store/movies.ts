import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { getMovies } from '../api/api';
import { RadioBtnType } from '../models/movie.model';
import { SEARCH_BY_BUTTONS, SORT_BY_BUTTONS } from '../helpers/constants';

export type SearchParams = {
  sortBy?: string;
  searchBy?: string;
  limit?: string;
  search?: string;
};

export const useMoviesStore = defineStore('movies', () => {
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
    return `http://localhost:4000/movies?${query}`;
  });

  const { movies, total, loading, error, fetchMovies } = getMovies();

  const setSortBy = async (btn: RadioBtnType) => {
    sortBy.value = btn;
    await refreshMovies();
  };
  const setSearchBy = async (btn: RadioBtnType) => {
    searchBy.value = btn;
    await refreshMovies();
  };
  const setSearchQuery = async (text: string) => {
    searchQuery.value = text;
    await refreshMovies();
  };

  const refreshMovies = async () => await fetchMovies(url.value);

  return {
    movies,
    total,
    sortBy,
    searchBy,
    searchQuery,
    loading,
    error,
    refreshMovies,
    setSortBy,
    setSearchBy,
    setSearchQuery,
  };
});
