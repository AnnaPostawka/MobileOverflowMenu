import { createAsyncThunk } from '@reduxjs/toolkit'

import { SessionInformation } from './types'

type FetchSessionInformationError = {
  errorMessage: string
}

export const fetchSessionInformation = createAsyncThunk<
  SessionInformation,
  number,
  { rejectValue: FetchSessionInformationError }
>('sessionInformation/fetch', async (id: number, thunkApi) => {
  const response = await fetch(
    `https://60fd92751fa9e90017c70ef5.mockapi.io/mobile-overflow-menu/sessionInformation/${id}`,
  )

  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      errorMessage: 'Failed to fetch session information.',
    })
  }

  const data: SessionInformation = await response.json()

  return data
})
