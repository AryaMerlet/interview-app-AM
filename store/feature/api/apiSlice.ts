import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../../../constants';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  // Define tag types for cache invalidation, only product here but can be extended with user, cart, etc.
  tagTypes: ['Product'],
  // No endpoints defined here; they will be injected in other slices
  endpoints: () => ({}),
});
