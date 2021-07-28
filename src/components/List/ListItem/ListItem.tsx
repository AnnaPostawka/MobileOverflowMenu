import React, { ReactNode } from 'react'

import { StyledListItem } from './ListItemStyled'

type ListItemProps = {
  children: ReactNode
}

const ListItem = ({ children }: ListItemProps): JSX.Element => <StyledListItem>{children}</StyledListItem>

export default ListItem
