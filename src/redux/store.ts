import { configureStore } from '@reduxjs/toolkit'

import sessionInformationReducer from './sessionInformation/sessionInformationSlice'
import sessionSettingsReducer from './sessionSettings/sessionSettingsSlice'

export const store = configureStore({
  reducer: {
    sessionInformation: sessionInformationReducer,
    sessionSettings: sessionSettingsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
