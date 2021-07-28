import React from 'react'

import IconButton from 'components/IconButton'

import { SessionInformation } from 'redux/sessionInformation/types'
import { SessionSettings } from 'redux/sessionSettings/types'

import {
  StyledBottomsheet,
  StyledCloseButtonWrapper,
  StyledSessionTitle,
  StyledContentWrapper,
} from './BottomsheetStyled'

type BottomsheetProps = {
  open: boolean
  onClick: () => void
  sessionInformation: SessionInformation
  sessionSettings: SessionSettings
}

const Bottomsheet = ({ open, sessionInformation, sessionSettings, onClick }: BottomsheetProps): JSX.Element => {
  const { title, repeats, host, description } = sessionInformation
  const { name, about } = host || {}
  const { highQuality, beautyFilter, reminder } = sessionSettings

  return (
    <StyledBottomsheet open={open}>
      <StyledCloseButtonWrapper>
        <IconButton icon={{ prefix: 'fas', iconName: 'times' }} onClick={onClick} />
      </StyledCloseButtonWrapper>
      <StyledContentWrapper>
        <StyledSessionTitle>{title}</StyledSessionTitle>
      </StyledContentWrapper>
    </StyledBottomsheet>
  )
}

export default Bottomsheet
