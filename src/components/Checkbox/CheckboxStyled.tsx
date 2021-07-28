import styled from 'styled-components'

import { colors } from 'constants/colors'

export const StyledCheckboxWrapper = styled.label<{ disabled?: boolean }>`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 16px;

  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
  `}
`

export const StyledCheckbox = styled.div<{ checked: boolean; disabled?: boolean }>`
  position: relative;
  border: 2px solid ${colors.green};
  border-radius: 4px;
  width: 24px;
  height: 24px;

  ${({ checked, disabled }) =>
    checked &&
    !disabled &&
    `
    background: ${colors.green};
  `}

  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
    border: 2px solid ${colors.lightGray};
  `}

  ${({ checked, disabled }) =>
    checked &&
    disabled &&
    `
    background: ${colors.white}
  `}
`

export const StyledInput = styled.input`
  opacity: 0;
  width: 1em;
  height: 1em;
`

export const StyledIconWrapper = styled.div<{ checked: boolean; disabled?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) scale3d(0.9, 0.9, 0.9);
  opacity: 0;
  transition: 0.2s;
  font-weight: 900;
  font-size: 16px;
  line-height: 16px;
  color: ${colors.white};

  ${({ checked }) =>
    checked &&
    `
    opacity: 1;
    transform: translateX(-50%) translateY(-50%) scale3d(1, 1, 1);
  `}

  ${({ disabled }) =>
    disabled &&
    `
    color: ${colors.lightGray};
  `}
`
