
export type SearchParams = {
  sortBy?: string;
  searchBy?: string;
  limit?: string;
  search?: string;
}

export const moviesApi = async (params: SearchParams) => {
  const query = new URLSearchParams(params).toString();
  const url = `http://localhost:4000/movies?${query}`;
  const result = await fetch(url);

  return await result.json();
}
