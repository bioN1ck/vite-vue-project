import { RadioBtnType } from '../models/movie.model';

export const SORT_BY_BUTTONS: RadioBtnType[] = [
  {
    label: 'Release date',
    value: 'release_date',
  },
  {
    label: 'Rating',
    value: 'vote_average',
  },
];

export const SEARCH_BY_BUTTONS: RadioBtnType[] = [
  {
    label: 'Title',
    value: 'title',
  },
  {
    label: 'Genres',
    value: 'genres',
  },
];
