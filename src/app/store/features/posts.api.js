import {api} from './api.js';

export const postsApi = api.injectEndpoints({
	endpoints: builder => ({
		getPosts: builder.query({
			query: (items = 10) => `/posts?limit=${items}`
		}),
	}),
});

export const {useGetPostsQuery} = postsApi;