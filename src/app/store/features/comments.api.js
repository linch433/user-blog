import { api } from './api.js';

export const commentsApi = api.injectEndpoints({
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (postId) => ({
        url: `/comments/post/${postId}`,
      }),
      providesTags: ['Comments'],
    }),
    createCommentByPostId: builder.mutation({
      query: ({ postId, data }) => ({
        url: `/comments/post/${postId}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Comments'],
    }),
    putCommentLikeById: builder.mutation({
      query: (commentId) => ({
        url: `/comments/like/${commentId}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  usePutCommentLikeByIdMutation,
  useCreateCommentByPostIdMutation,
} = commentsApi;
