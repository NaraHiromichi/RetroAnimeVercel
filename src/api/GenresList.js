import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const GenresListApi = createApi({
  reducerPath: "GenresList",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.jikan.moe/v4` }),
  endpoints: (builder) => ({
    getGenresList: builder.query({
      query: () => `genres/anime`,
    }),
  }),
});

export const { useGetGenresListQuery } = GenresListApi;
