import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/post.model';


export const postAPI = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Post'],

  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit: number = 10) => ({
        url: '/posts',
        params: {
          _limit: limit
        }
      }),
      providesTags: (result) => ['Post'],
    }),

    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),

    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),

    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  })
});
