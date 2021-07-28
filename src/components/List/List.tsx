import React, { ReactNode } from 'react'

import { StyledList } from './ListStyled'

type ListProps = {
  children: ReactNode
  margin?: string
}

const List = ({ children, margin }: ListProps): JSX.Element => <StyledList margin={margin}>{children}</StyledList>

export default List
