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
        updateUserImage: builder.mutation({
            query: ({userId, fileData}) => ({
                url: `/users/upload/${userId}`,
                method: 'PUT',
                body: fileData
            })
        }),
    }),
});

export const {useGetUsersQuery, useCreateUserMutation, useGetMyUserInfoQuery, useUpdateUserImageMutation} = usersApi;