import { createSlice } from '@reduxjs/toolkit'

import { RootState } from 'redux/store'

import { SessionInformation } from './types'

import { fetchSessionInformation } from './fetchSessionInformation'

type SessionInformationState = {
  data: SessionInformation
  error: string | null
  isFetching: boolean
}

const initialState = {
  data: {},
  error: null,
  isFetching: false,
} as SessionInformationState

export const sessionInformationSlice = createSlice({
  name: 'sessionInformation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSessionInformation.pending, (state) => {
      state.isFetching = true
      state.error = null
    })
    builder.addCase(fetchSessionInformation.fulfilled, (state, { payload }) => {
      state.data = payload
      state.isFetching = false
    })
    builder.addCase(fetchSessionInformation.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload.errorMessage
      }

      state.isFetching = false
    })
  },
})

export const selectSessionInformationData = (state: RootState): SessionInformation => state.sessionInformation.data
export const selectSessionInformationIsFetching = (state: RootState): boolean => state.sessionInformation.isFetching

export default sessionInformationSlice.reducer
