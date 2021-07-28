import React from 'react'
import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'redux/hooks'
import {
  toggleHighQuality,
  toggleBeautyFilter,
  toggleReminder,
  selectSessionSettingsHighQuality,
  selectSessionSettingsBeautyFilter,
  selectSessionSettingsReminder,
} from 'redux/sessionSettings/sessionSettingsSlice'

import List from 'components/List'
import Checkbox from 'components/Checkbox'

const Settings = (): JSX.Element => {
  const { t } = useTranslation('sessionSettings')
  const dispatch = useAppDispatch()
  const highQuality = useAppSelector(selectSessionSettingsHighQuality)
  const beautyFilter = useAppSelector(selectSessionSettingsBeautyFilter)
  const reminder = useAppSelector(selectSessionSettingsReminder)

  return (
    <List margin="0 0 48px">
      <Checkbox checked={highQuality} label={t('highQuality')} onClick={() => dispatch(toggleHighQuality())} />
      <Checkbox
        checked={beautyFilter}
        label={t('beautyFilter')}
        onClick={() => dispatch(toggleBeautyFilter())}
        disabled
      />
      <Checkbox checked={reminder} label={t('reminder')} onClick={() => dispatch(toggleReminder())} />
    </List>
  )
}

export default Settings
