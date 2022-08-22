import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RecomandedApi = createApi({
  reducerPath: "RecomandedApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.jikan.moe/v4`,
  }),
  endpoints: (builder) => ({
    getAnimeByRecomanded: builder.query({
      query: (pageNumber) => `seasons/now?page=${pageNumber}`,
    }),
  }),
});

export const { useGetAnimeByRecomandedQuery } = RecomandedApi;

// `recommendations/anime?page=${pageNumber}`,
