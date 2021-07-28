import styled from 'styled-components'

import { colors } from 'constants/colors'

export const StyledButton = styled.button`
  color: ${colors.white};
  background-color: ${colors.red};
  border-radius: 16px;
  border: none;
  animation-timing-function: ease-out;
  animation-duration: 300ms;
  margin: 0 16px;
  width: calc(100% - 2 * 16px);
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.2));
  min-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledButtonLabel = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
`

export const StyledIconWrapper = styled.div`
  margin-right: 6px;

  & {
    font-weight: 900;
    font-size: 16px;
    line-height: 16px;
  }
`
