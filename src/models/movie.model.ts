export interface Movie {
  id?: number;
  imageUrl: string;
  movieName: string;
  releaseYear: string;
  rating: number;
  duration: number;
  description: string;
  relevantGenres: string[];
}

export type MovieRaw = {
  budget: number;
  genres: string[];
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type MovieResponse = {
  data: MovieRaw[];
  totalAmount: number;
  offset: number;
  limit: number;
};

export type RadioBtnType = {
  label: string;
  value: string;
};
