import {api} from './api.js';

export const postsApi = api.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts'
    }),
  }),
});

export const {useGetPostsQuery} = postsApi;