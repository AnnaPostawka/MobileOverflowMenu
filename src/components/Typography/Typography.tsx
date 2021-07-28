import React from 'react'

import { StyledTypography } from './TypographyStyled'

type TypographyProps = {
  bold?: boolean
  children: React.ReactNode
  color?: string
  fontSize?: string
  inline?: boolean
  lineHeight?: string
  margin?: string
}

const Typography = ({ bold, children, color, fontSize, inline, lineHeight, margin }: TypographyProps): JSX.Element => (
  <StyledTypography
    bold={bold}
    color={color}
    fontSize={fontSize}
    inline={inline}
    lineHeight={lineHeight}
    margin={margin}
  >
    {children}
  </StyledTypography>
)

export default Typography
