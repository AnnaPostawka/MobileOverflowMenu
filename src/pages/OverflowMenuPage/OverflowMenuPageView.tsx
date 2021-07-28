import React from 'react'
import { useTranslation } from 'react-i18next'

import { SessionInformation } from 'redux/sessionInformation/types'
import { SessionSettings } from 'redux/sessionSettings/types'

import { colors } from 'constants/colors'

import Button from 'components/Button'
import Bottomsheet from 'components/Bottomsheet'
import Typography from 'components/Typography'
import Settings from 'components/Settings'

import { StyledOverflowMenuPage, StyledButtonWrapper } from './OverflowMenuPageStyled'

type OverflowMenuPageViewProps = {
  openMenu: boolean
  sessionInformation: SessionInformation
  sessionSettings: SessionSettings
  onBeautyFilterToggle: () => void
  onCloseButtonClick: () => void
  onHighQualityToggle: () => void
  onOpenButtonClick: () => void
  onReminderToggle: () => void
}

const OverflowMenuPageView = ({
  openMenu,
  sessionInformation,
  sessionSettings,
  onBeautyFilterToggle,
  onCloseButtonClick,
  onHighQualityToggle,
  onOpenButtonClick,
  onReminderToggle,
}: OverflowMenuPageViewProps): JSX.Element => {
  const { t } = useTranslation()

  const { description, host, repeats, title } = sessionInformation
  const { about, name } = host || {}
  const { beautyFilter, highQuality, reminder } = sessionSettings

  return (
    <StyledOverflowMenuPage>
      <StyledButtonWrapper>
        <Button icon={{ prefix: 'fas', iconName: 'plus' }} label={t('open')} onClick={onOpenButtonClick} />
      </StyledButtonWrapper>
      <Bottomsheet open={openMenu} onClick={onCloseButtonClick}>
        <Typography fontSize="20px" bold>
          {title}
        </Typography>
        <Typography color={colors.darkGray} fontSize="14px">
          {t('sessionInformation:repeats', { frequency: t(`sessionInformation:frequency.${repeats}`) })}
        </Typography>
        <Typography fontSize="18px" margin="24px 0">
          {t('sessionInformation:hostedBy').concat(' ')}
          <Typography color={colors.red} bold inline>
            {name}
          </Typography>
        </Typography>
        <Settings
          beautyFilter={beautyFilter}
          highQuality={highQuality}
          reminder={reminder}
          onBeautyFilterToggle={onBeautyFilterToggle}
          onHighQualityToggle={onHighQualityToggle}
          onReminderToggle={onReminderToggle}
          beautyFilterDisabled
        />
        <Typography margin="0 0 4px" bold>
          {t('sessionInformation:about')}
        </Typography>
        <Typography margin="0 0 24px">{description}</Typography>
        <Typography margin="0 0 4px" bold>
          {name}
        </Typography>
        <Typography margin="0 0 20px">{about}</Typography>
      </Bottomsheet>
    </StyledOverflowMenuPage>
  )
}

export default OverflowMenuPageView
