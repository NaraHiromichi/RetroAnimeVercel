import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const GenresResultApi = createApi({
  reducerPath: "GenresResultApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.jikan.moe/v4`,
  }),
  endpoints: (builder) => ({
    getGenresResult: builder.query({
      query: ({ pageNumber, selectedGenresNum }) => {
        let genresListString = "";
        selectedGenresNum.map((genre, index) => {
          if (index === 0) {
            genresListString = genre.toString();
          } else if (index > 0) {
            genresListString += `,${genre.toString()}`;
          }
        });

        return `anime?page=${pageNumber}&genres=${genresListString}`;
      },
    }),
  }),
});

export const { useGetGenresResultQuery } = GenresResultApi;
