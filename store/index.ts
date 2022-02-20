import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Context, createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import reducer from "./modules";

const makeStore = (context: Context) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});
