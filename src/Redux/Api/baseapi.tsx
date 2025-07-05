import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAPI = createApi({
  reducerPath: "baseAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://l2-assignment-3-two.vercel.app/",
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    // get books
    getBooks: builder.query({
      query: () => "/api/books",
      providesTags: ["Books"],
    }),

    // get a single book
    getBook: builder.query({
      query: (id) => `api/books/${id}`,
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
    // add borrow book
    addBorrow: builder.mutation({
      query: (borrowData) => ({
        url: "/add_borrow",
        method: "POST",
        body: borrowData,
      }),
    }),

    // update a book info
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `api/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
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

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useAddBorrowMutation,
  useGetBookQuery,
  useUpdateBookMutation
} = baseAPI;
