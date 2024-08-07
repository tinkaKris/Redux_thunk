import { Action, configureStore, Middleware } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice.ts"
import { useDispatch } from "react-redux"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const logger: Middleware = (storeApi) => (next) => (action) => {
  const prevState = storeApi.getState().counter.count
  const result = next(action)
  const nextState = storeApi.getState().counter.count
  console.log(
    `Previous count: ${prevState}\n\tDispatched action: ${(action as Action).type}\n\t\tNext count: ${nextState}`
  )
  return result
}

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)
})

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
