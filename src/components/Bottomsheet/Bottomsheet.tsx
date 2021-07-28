import React, { ReactNode } from 'react'

import IconButton from 'components/IconButton'

import { StyledBottomsheet, StyledCloseButtonWrapper, StyledContentWrapper } from './BottomsheetStyled'

type BottomsheetProps = {
  children: ReactNode
  open: boolean
  onClick: () => void
}

const Bottomsheet = ({ children, open, onClick }: BottomsheetProps): JSX.Element => (
  <StyledBottomsheet open={open}>
    <StyledCloseButtonWrapper>
      <IconButton icon={{ prefix: 'fas', iconName: 'times' }} onClick={onClick} />
    </StyledCloseButtonWrapper>
    <StyledContentWrapper>{children}</StyledContentWrapper>
  </StyledBottomsheet>
)

export default Bottomsheet
