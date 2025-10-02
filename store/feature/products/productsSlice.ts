import {apiSlice} from '../api/apiSlice';

// Define the structure of a product object
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Inject endpoints to the existing apiSlice
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => 'products',
      providesTags: ['Product'],
    }),
    // more endpoints can be added here, exemple:
    // getProduct: builder.query<Product, number>({
    //   query: id => `products/${id}`,
    //   // Provide a tag for the specific product to enable cache invalidation
    //   providesTags: (result, error, id) => [{type: 'Product', id}],
    // }),
    // addProduct: builder.mutation<Product, Partial<Product>>({
    //   query: product => ({
    //     url: 'products',
    //     method: 'POST',
    //     body: product,
    //   }),
    //   invalidatesTags: ['Product'],
    // }),
  }),
});

export const {useGetProductsQuery} = productApiSlice;

// Update the const export line to include new hooks
// export const {useGetProductsQuery, useGetProductQuery, useAddProductMutation } = productApiSlice;
