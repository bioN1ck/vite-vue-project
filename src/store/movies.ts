import { ref } from 'vue';
import { defineStore } from 'pinia';

import { moviesApi, SearchParams } from '../api/movies';
import { mapRawToMovie } from '../helpers/functions';
import { Movie, RadioBtnType } from '../models/movie.model';
import { SEARCH_BY_BUTTONS, SORT_BY_BUTTONS } from '../helpers/constants.ts';

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<Movie[]>([]);
  const total = ref(0);

  const sortBy = ref<RadioBtnType>(SORT_BY_BUTTONS[0]);
  const searchBy = ref<RadioBtnType>(SEARCH_BY_BUTTONS[0]);
  const searchQuery = ref('');

  const setSortBy = (btn: RadioBtnType) => {
    sortBy.value = btn;
    getMovies();
  };
  const setSearchBy = (btn: RadioBtnType) => {
    searchBy.value = btn;
    getMovies();
  };
  const setSearchQuery = (text: string) => {
    searchQuery.value = text;
    getMovies();
  };

  const getMovies = async () => {
    const params: SearchParams = {
      sortBy: sortBy.value.value,
      searchBy: searchBy.value.value,
      search: searchQuery.value,
      limit: '12',
    };
    const response = await moviesApi(params);
    movies.value = response.data.map(mapRawToMovie);
    total.value = response.totalAmount;
  };

  return {
    movies,
    total,
    sortBy,
    searchBy,
    searchQuery,
    getMovies,
    setSortBy,
    setSearchBy,
    setSearchQuery,
  };
});
