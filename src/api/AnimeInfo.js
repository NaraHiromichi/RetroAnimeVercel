import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AnimeInfoApi = createApi({
  reducerPath: "animeInfo",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.jikan.moe/v4`,
  }),
  endpoints: (builder) => ({
    getAnimeInfo: builder.query({
      query: (MAL_ID) => `anime/${MAL_ID}/full`,
    }),
  }),
});

export const { useGetAnimeInfoQuery } = AnimeInfoApi;
