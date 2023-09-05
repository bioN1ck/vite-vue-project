import { MovieRaw } from '../models/movie.model.ts';

export type SearchParams = {
  sortBy?: string;
  searchBy?: string;
  limit?: string;
  search?: string;
};

export type MovieResponse = {
  data: MovieRaw[];
  totalAmount: number;
  offset: number;
  limit: number;
};

export const moviesApi = async (params: SearchParams): Promise<MovieResponse> => {
  const query = new URLSearchParams(params).toString();
  const url = `http://localhost:4000/movies?${query}`;
  const result = await fetch(url);

  return await result.json();
};
