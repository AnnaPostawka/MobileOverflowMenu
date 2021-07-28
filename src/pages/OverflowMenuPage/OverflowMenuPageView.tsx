import React from 'react'

import { SessionInformation } from 'redux/sessionInformation/types'
import { SessionSettings } from 'redux/sessionSettings/types'

import Button from 'components/Button'
import Bottomsheet from 'components/Bottomsheet'

import { StyledOverflowMenuPage, StyledButtonWrapper } from './OverflowMenuPageStyled'

type OverflowMenuPageViewProps = {
  buttonLabel: string
  isFetching: boolean
  openMenu: boolean
  sessionInformation: SessionInformation
  sessionSettings: SessionSettings
  onButtonClick: () => void
}

const OverflowMenuPageView = ({
  buttonLabel,
  isFetching,
  openMenu,
  sessionInformation,
  sessionSettings,
  onButtonClick,
}: OverflowMenuPageViewProps): JSX.Element => (
  <StyledOverflowMenuPage>
    <StyledButtonWrapper>
      <Button icon={{ prefix: 'fas', iconName: 'plus' }} label={buttonLabel} onClick={onButtonClick} />
    </StyledButtonWrapper>
    <Bottomsheet
      sessionInformation={sessionInformation}
      sessionSettings={sessionSettings}
      open={openMenu}
      onClick={onButtonClick}
    />
  </StyledOverflowMenuPage>
)

export default OverflowMenuPageView
