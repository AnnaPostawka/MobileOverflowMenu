import styled from 'styled-components'

import { colors } from 'constants/colors'

import backgroundImage from 'assets/background.png'

export const StyledOverflowMenuPage = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage}), ${colors.basic};
  background-size: cover;
  background-repeat: no-repeat;
`

export const StyledButtonWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
