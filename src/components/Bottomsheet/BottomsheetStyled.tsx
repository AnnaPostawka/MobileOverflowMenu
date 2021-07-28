import styled from 'styled-components'

export const StyledBottomsheet = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'inherit' : 'none')};
  position: absolute;
  height: 82vh;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px -8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 24px 24px 0px 0px;

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
`

export const StyledContentWrapper = styled.div`
  padding: 8px 32px 42px;
`

export const StyledTopicDescriptionWrapper = styled.div``

export const StyledHostDescriptionWrapper = styled.div``

export const StyledSessionTitle = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  align-self: stretch;
`
