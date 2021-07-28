import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconLookup } from '@fortawesome/fontawesome-svg-core'

import React from 'react'

import { StyledIconButton } from './IconButtonStyled'

type IconButtonProps = {
  background?: string
  icon: IconLookup
  iconColor?: string
  iconSize?: string
  size?: string
  onClick: () => void
}

const IconButton = ({ background, icon, iconColor, iconSize, size, onClick }: IconButtonProps): JSX.Element => (
  <StyledIconButton
    background={background}
    iconColor={iconColor}
    iconSize={iconSize}
    size={size}
    type="button"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} />
  </StyledIconButton>
)

export default IconButton
