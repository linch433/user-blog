import {api} from './api.js';

export const usersApi = api.injectEndpoints({
	endpoints: builder => ({
		getUsers: builder.query({
			query: (items = 10) => `/users?limit=${items}`
		}),
		createUser: builder.mutation({
			query: (arg) => ({
				url: '/users',
				method: 'POST',
				body: arg,
			}),
		}),
		getMyUserInfo: builder.query({
			query: () => '/auth/user'
		}),
	}),
});

export const {useGetUsersQuery, useCreateUserMutation, useGetMyUserInfoQuery} = usersApi;