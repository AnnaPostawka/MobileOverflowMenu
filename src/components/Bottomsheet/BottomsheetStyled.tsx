import styled from 'styled-components'

import { colors } from 'constants/colors'

const bottomsheetHeight = '82vh'

export const StyledBottomsheet = styled.div<{ open: boolean }>`
  position: absolute;
  height: ${bottomsheetHeight};
  width: 100vw;
  left: 0;
  bottom: -100vh;
  background: ${colors.white};
  box-shadow: 0px -8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 24px 24px 0px 0px;
  z-index: 100;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  transition: bottom 300ms ease-out;

  ${({ open }) =>
    open &&
    `
    bottom: 0;
  `}
`

export const StyledCloseButtonWrapper = styled.div<{ open: boolean }>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 24px 32px 8px;
  position: fixed;
  bottom: -100vh;
  right: 0;
  z-index: 101;

  transition: bottom 300ms ease-out;

  ${({ open }) =>
    open &&
    `
    bottom: calc(${bottomsheetHeight} - 64px);
  `}
`

export const StyledContentWrapper = styled.div`
  padding: 64px 32px 42px;
`

export const StyledTopicDescriptionWrapper = styled.div``

export const StyledHostDescriptionWrapper = styled.div``
