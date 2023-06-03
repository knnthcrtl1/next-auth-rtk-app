// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface UserType {
  id: string;
  name: string;
  username: string;
  email: string;
}

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getAllUser: builder.query<UserType[], number | void>({
      query: (count = 5) => {
        console.log("count =>", count);
        return `/users?_limit=${count}`;
      },
      providesTags: ["Users"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUserQuery } = userApi;
