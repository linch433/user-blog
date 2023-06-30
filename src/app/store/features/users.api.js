import { api } from './api.js';

export const usersApi = api.injectEndpoints({
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (args) => ({
        url: `/users`,
        params: { ...args },
      }),
      providesTags: ['User'],
    }),
    getUserById: builder.query({
      query: (userId) => `/users/${userId}`,
    }),
    createUser: builder.mutation({
      query: (arg) => ({
        url: '/users',
        method: 'POST',
        body: arg,
      }),
    }),
    getMyUserInfo: builder.query({
      query: () => '/auth/user',
      providesTags: ['User'],
    }),
    updateUserImage: builder.mutation({
      query: ({ userId, fileData }) => ({
        url: `/users/upload/${userId}`,
        method: 'PUT',
        body: fileData,
      }),
      invalidatesTags: ['User'],
    }),
    updateUserInfo: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useGetMyUserInfoQuery,
  useUpdateUserImageMutation,
  useUpdateUserInfoMutation,
} = usersApi;
