import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

import { colors } from 'constants/colors'

import Typography from 'components/Typography'

import { StyledCheckboxWrapper, StyledCheckbox, StyledInput, StyledIconWrapper } from './CheckboxStyled'

type CheckboxProps = {
  checked: boolean
  disabled?: boolean
  label: string
  onClick: () => void
}

const Checkbox = ({ checked, disabled, label, onClick }: CheckboxProps): JSX.Element => (
  <StyledCheckboxWrapper disabled={disabled}>
    <StyledCheckbox checked={checked} disabled={disabled}>
      <StyledInput type="checkbox" checked={checked} onClick={onClick} />
      <StyledIconWrapper checked={checked} disabled={disabled}>
        <FontAwesomeIcon icon={{ prefix: 'fas', iconName: 'check' }} />
      </StyledIconWrapper>
    </StyledCheckbox>
    <Typography color={disabled ? colors.gray : colors.basic}>{label}</Typography>
  </StyledCheckboxWrapper>
)

export default Checkbox
