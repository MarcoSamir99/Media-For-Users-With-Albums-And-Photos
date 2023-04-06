import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),

    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                providesTags: (result, error, album) => {
                    return[{type: 'Photo', id: album.id}];
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        method: 'Get',
                        params: {
                            albumId: album.id,
                        },  
                    };
                },
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return[{type: 'Photo', id: album.id}];
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        method: 'POST',
                        body: {
                            albumId: album.id,
                            url: faker.image.abstract(150, 150, true),
                        },
                    };
                },
            }),
            removePhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return[{type: 'Photo', id: photo.albumId }];
                },
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: 'DELETE',
                    };
                },
            }),
        };
    },
});

export const {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} = photosApi;
export { photosApi };