import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {baseUrl} from "../../../features/constants/baseUrl.js";

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('AUTH_TOKEN');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users'
    })
  })
})

export const {useGetUsersQuery} = api;
