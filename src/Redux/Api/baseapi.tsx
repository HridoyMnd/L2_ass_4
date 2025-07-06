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
      query: () => "/books",
      providesTags: ["Books"],
    }),

    // latest books
    latest_books: builder.query({
      query: () => "/latest_books",
      providesTags: ["Books"],
    }),

    // get a single book
    getBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["Books"],
    }),

    // add book
    addBook: builder.mutation({
      query: (bookData) => ({
        url: "/create-book",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["Books"],
    }),
    
    // add borrow book
    addBorrow: builder.mutation({
      query: ({ bookId, ...data}) => ({
        url: `/borrow/${bookId}`,
        method: "POST",
        body: data,
      }),
       invalidatesTags: ["Books"],
    }),

        // get borrow books
    getBorrowBooks: builder.query({
      query: () => "/borrow-summary",
      providesTags: ["Books"],
    }),


    // update a book info
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/edit-book/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),

    //delete book
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/api/books/${id}`,
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
  useUpdateBookMutation,
  useGetBorrowBooksQuery,
  useLatest_booksQuery
} = baseAPI;
