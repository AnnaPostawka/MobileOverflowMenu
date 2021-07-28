import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconLookup } from '@fortawesome/fontawesome-svg-core'

import React from 'react'

import { StyledIconButton } from './IconButtonStyled'

type IconButtonProps = {
  icon: IconLookup
  onClick: () => void
}

const IconButton = ({ icon, onClick }: IconButtonProps): JSX.Element => (
  <StyledIconButton type="button" onClick={onClick}>
    <FontAwesomeIcon icon={icon} />
  </StyledIconButton>
)

export default IconButton
