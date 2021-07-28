import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { colors } from 'constants/colors'

import Checkbox from 'components/Checkbox'
import IconButton from 'components/IconButton'
import Typography from 'components/Typography'
import Settings from 'components/Settings'

import { SessionInformation } from 'redux/sessionInformation/types'
import { SessionSettings } from 'redux/sessionSettings/types'

import { StyledBottomsheet, StyledCloseButtonWrapper, StyledContentWrapper } from './BottomsheetStyled'

type BottomsheetProps = {
  open: boolean
  onClick: () => void
  sessionInformation: SessionInformation
  sessionSettings: SessionSettings
}

const Bottomsheet = ({ open, sessionInformation, sessionSettings, onClick }: BottomsheetProps): JSX.Element => {
  const { t } = useTranslation('sessionInformation')
  const [checked, setChecked] = useState(false)

  const { title, repeats, host, description } = sessionInformation
  const { name, about } = host || {}
  const { highQuality, beautyFilter, reminder } = sessionSettings

  return (
    <StyledBottomsheet open={open}>
      <StyledCloseButtonWrapper>
        <IconButton icon={{ prefix: 'fas', iconName: 'times' }} onClick={onClick} />
      </StyledCloseButtonWrapper>
      <StyledContentWrapper>
        <Typography fontSize="20px" bold>
          {title}
        </Typography>
        <Typography color={colors.darkGray} fontSize="14px">
          {t('repeats', { frequency: t(`frequency.${repeats}`) })}
        </Typography>
        <Typography fontSize="18px" margin="24px 0">
          {t('hostedBy').concat(' ')}
          <Typography color={colors.red} bold inline>
            {name}
          </Typography>
        </Typography>
        <Settings />
        <Typography margin="0 0 4px" bold>
          {t('about')}
        </Typography>
        <Typography margin="0 0 24px">{description}</Typography>
        <Typography margin="0 0 4px" bold>
          {name}
        </Typography>
        <Typography margin="0 0 20px">{about}</Typography>
      </StyledContentWrapper>
    </StyledBottomsheet>
  )
}

export default Bottomsheet
