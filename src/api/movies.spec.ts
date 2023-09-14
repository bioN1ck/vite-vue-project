import { describe, expect, it, vi } from 'vitest';

import { MOVIE_RESPONSE } from '../components/__tests__/mocks';
import { moviesApi, SearchParams } from './movies';

vi.stubGlobal('fetch', () => ({ json: () => Promise.resolve(MOVIE_RESPONSE) }));

describe('API', () => {
  it('should fetch movies', async () => {
    const limit = MOVIE_RESPONSE.limit;
    const searchParams: SearchParams = {
      limit: limit.toString(),
      search: '',
    };

    const result = await moviesApi(searchParams);
    expect(result.limit).toEqual(limit);
  });
});
