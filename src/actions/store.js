import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore(
    {},
    middleware = thunk
);