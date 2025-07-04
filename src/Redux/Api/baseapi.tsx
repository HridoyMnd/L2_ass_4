import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAPI = createApi({
  reducerPath: "baseAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4300" }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    // get book
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["Books"],
    }),

    // add book
    addBook: builder.mutation({
      query: (bookData) => ({
        url: "/create_book",
        method: "POST",
        body: bookData,
      }),
    }),

    //delete book
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/delete_book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation, useDeleteBookMutation } = baseAPI;
