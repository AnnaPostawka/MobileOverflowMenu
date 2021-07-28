import React, { useState, useEffect } from 'react'

import { useAppSelector, useAppDispatch } from 'redux/hooks'

import { fetchSessionInformation } from 'redux/sessionInformation/fetchSessionInformation'
import { selectSessionInformationData } from 'redux/sessionInformation/sessionInformationSlice'
import {
  selectSessionSettings,
  toggleBeautyFilter,
  toggleHighQuality,
  toggleReminder,
} from 'redux/sessionSettings/sessionSettingsSlice'

import OverviewMenuPageView from './OverflowMenuPageView'

const OverflowMenuPage = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchSessionInformation(1))
  }, [dispatch])

  const sessionInformation = useAppSelector(selectSessionInformationData)
  const sessionSettings = useAppSelector(selectSessionSettings)

  const handleOpenButtonClick = () => {
    setOpenMenu(true)
  }

  const handleCloseButtonClick = () => {
    setOpenMenu(false)
  }

  const handleHighQualityToggle = () => {
    dispatch(toggleHighQuality())
  }

  const handleBeautyFilterToggle = () => {
    dispatch(toggleBeautyFilter())
  }

  const handleReminderToggle = () => {
    dispatch(toggleReminder())
  }

  return (
    <OverviewMenuPageView
      openMenu={openMenu}
      sessionInformation={sessionInformation}
      sessionSettings={sessionSettings}
      onBeautyFilterToggle={handleBeautyFilterToggle}
      onCloseButtonClick={handleCloseButtonClick}
      onHighQualityToggle={handleHighQualityToggle}
      onOpenButtonClick={handleOpenButtonClick}
      onReminderToggle={handleReminderToggle}
    />
  )
}

export default OverflowMenuPage
