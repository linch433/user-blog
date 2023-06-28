import { api } from './api.js';

export const commentsApi = api.injectEndpoints({
  tagTypes: ['Comments'],
  endpoints: builder => ({
    getComments: builder.query({
      query: (postId) => ({
        url: `/comments/post/${postId}`,
      }),
      providesTags: ['Comments'],
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;