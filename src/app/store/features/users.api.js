import {api} from './api.js';

export const usersApi = api.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/users'
    }),
    createUser: builder.mutation({
      query: (arg) => ({
        url: '/users',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const {useGetUsersQuery, useCreateUserMutation} = usersApi;