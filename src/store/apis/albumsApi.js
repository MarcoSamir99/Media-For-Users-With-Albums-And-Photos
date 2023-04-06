import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints(builder) {
        return {
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return[{type: 'Album', id: album.userId}];
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: 'DELETE',
                    };
                }
            }),

            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return[{type: 'Album', id: user.id}]; //to onlu make an uodate req for the user that created album not all users
                },  //call fetch albums after excution of this endpoint
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        },
                    };
                },
            }),

            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    return[{type: 'Album', id: user.id}];
                },    //we give it a string tag to make it re run when we use invalidatesTags in an mutatui
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id,
                        },
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { 
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation,
} = albumsApi;
export {  albumsApi };

