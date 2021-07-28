import React from 'react'
import { useTranslation } from 'react-i18next'

import List from 'components/List'
import ListItem from 'components/List/ListItem'
import Checkbox from 'components/Checkbox'

type SettingsProps = {
  beautyFilter: boolean
  highQuality: boolean
  reminder: boolean
  onBeautyFilterToggle: () => void
  onHighQualityToggle: () => void
  onReminderToggle: () => void
  beautyFilterDisabled?: boolean
}

const Settings = ({
  beautyFilter,
  highQuality,
  reminder,
  onBeautyFilterToggle,
  onHighQualityToggle,
  onReminderToggle,
  beautyFilterDisabled,
}: SettingsProps): JSX.Element => {
  const { t } = useTranslation('sessionSettings')

  return (
    <List margin="0 0 48px">
      <ListItem>
        <Checkbox checked={highQuality} label={t('highQuality')} onClick={onHighQualityToggle} />
      </ListItem>
      <ListItem>
        <Checkbox
          checked={beautyFilter}
          label={t('beautyFilter')}
          onClick={onBeautyFilterToggle}
          disabled={beautyFilterDisabled}
        />
      </ListItem>
      <ListItem>
        <Checkbox checked={reminder} label={t('reminder')} onClick={onReminderToggle} />
      </ListItem>
    </List>
  )
}

export default Settings
