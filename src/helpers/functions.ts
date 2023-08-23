import { Movie, MovieRaw } from '../models/movie.model';

export const mapRawToMovie = (res: MovieRaw): Movie => ({
  id: res.id,
  imageUrl: res.poster_path,
  movieName: res.title,
  relevantGenres: res.genres,
  releaseYear: new Date(res.release_date).getFullYear().toString(),
  duration: res.runtime,
  description: res.overview,
  rating: res.vote_average,
});
