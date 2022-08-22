import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SearchApi = createApi({
  reducerPath: "SearchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.jikan.moe/v4`,
  }),
  endpoints: (builder) => ({
    getSearchedAnime: builder.query({
      query: ({ num, findedText }) => {
        return `anime?q=${findedText}&page=${num}`;
      },
    }),
  }),
});

export const { useGetSearchedAnimeQuery } = SearchApi;
