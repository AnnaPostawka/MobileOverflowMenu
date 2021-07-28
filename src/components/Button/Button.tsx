import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconLookup } from '@fortawesome/fontawesome-svg-core'

import React from 'react'

import { StyledButton, StyledButtonLabel, StyledIconWrapper } from './ButtonStyled'

type ButtonProps = {
  icon?: IconLookup
  label: string
  onClick: () => void
}

const Button = ({ icon, label, onClick }: ButtonProps): JSX.Element => (
  <StyledButton type="button" onClick={onClick}>
    {icon && (
      <StyledIconWrapper>
        <FontAwesomeIcon icon={icon} />
      </StyledIconWrapper>
    )}
    <StyledButtonLabel>{label}</StyledButtonLabel>
  </StyledButton>
)

export default Button
