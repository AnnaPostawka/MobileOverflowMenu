import { createSlice } from '@reduxjs/toolkit'

import { RootState } from 'redux/store'

import { SessionSettings } from './types'

const initialState = {
  highQuality: true,
  beautyFilter: true,
  reminder: true,
} as SessionSettings

export const sessionSettingsSlice = createSlice({
  name: 'sessionSettings',
  initialState,
  reducers: {
    toggleHighQuality: (state) => {
      state.highQuality = !state.highQuality
    },
    toggleBeautyFilter: (state) => {
      state.beautyFilter = !state.beautyFilter
    },
    toggleReminder: (state) => {
      state.reminder = !state.reminder
    },
  },
})

export const { toggleHighQuality, toggleBeautyFilter, toggleReminder } = sessionSettingsSlice.actions

export const selectSessionSettings = (state: RootState): SessionSettings => state.sessionSettings

export default sessionSettingsSlice.reducer
