import { api } from './api.js';

export const postsApi = api.injectEndpoints({
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (args) => ({
        url: `/posts`,
        params: { ...args },
      }),
      providesTags: ['Posts'],
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: '/posts',
        method: 'POST',
        body: data,
      }),
    }),
    getPostById: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),
    deletePostById: builder.mutation({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
    updatePostById: builder.mutation({
      query: ({ postId, data }) => ({
        url: `/posts/${postId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Posts'],
    }),
    updatePostImageById: builder.mutation({
      query: ({ postId, data }) => ({
        url: `/posts/upload/${postId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Posts'],
    }),
    setLikeForPostById: builder.mutation({
      query: (postId) => ({
        url: `/posts/like/${postId}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useGetPostByIdQuery,
  useDeletePostByIdMutation,
  useUpdatePostByIdMutation,
  useUpdatePostImageByIdMutation,
  useSetLikeForPostByIdMutation,
} = postsApi;
