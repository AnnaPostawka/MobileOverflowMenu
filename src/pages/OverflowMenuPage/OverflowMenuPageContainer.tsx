import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'redux/hooks'

import { fetchSessionInformation } from 'redux/sessionInformation/fetchSessionInformation'
import {
  selectSessionInformationIsFetching,
  selectSessionInformationData,
} from 'redux/sessionInformation/sessionInformationSlice'
import { selectSessionSettings } from 'redux/sessionSettings/sessionSettingsSlice'

import OverviewMenuPageView from './OverflowMenuPageView'

const OverflowMenuPage = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchSessionInformation(1))
  }, [dispatch])
  const { t } = useTranslation()

  const isFetching = useAppSelector(selectSessionInformationIsFetching)
  const sessionInformation = useAppSelector(selectSessionInformationData)
  const sessionSettings = useAppSelector(selectSessionSettings)

  const handleButtonClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <OverviewMenuPageView
      buttonLabel={t('open')}
      isFetching={isFetching}
      openMenu={openMenu}
      sessionInformation={sessionInformation}
      sessionSettings={sessionSettings}
      onButtonClick={handleButtonClick}
    />
  )
}

export default OverflowMenuPage
