import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        albums: albumsApi.reducer,
        photos: photosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware);
    }
});

setupListeners(store.dispatch);

export * from './thunks/fetchUsers';  //this mean that we import everything from fetch users and export it
export * from './thunks/addUser';
export * from './thunks/removeUser';
export {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation
     } from './apis/albumsApi';  

export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} from './apis/photosApi';