import styled from 'styled-components'

import { colors } from 'constants/colors'

const bottomsheetHeight = '82vh'

export const StyledBottomsheet = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'inherit' : 'none')};
  position: absolute;
  height: ${bottomsheetHeight};
  width: 100%;
  left: 0;
  bottom: 0;
  background: ${colors.white};
  box-shadow: 0px -8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 24px 24px 0px 0px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const StyledCloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 24px 32px 8px;
  position: fixed;
  top: calc(100vh - ${bottomsheetHeight});
  right: 0;
`

export const StyledContentWrapper = styled.div`
  padding: 64px 32px 42px;
`

export const StyledTopicDescriptionWrapper = styled.div``

export const StyledHostDescriptionWrapper = styled.div``
