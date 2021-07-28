import styled from 'styled-components'

import { colors } from 'constants/colors'

export const StyledTypography = styled.p<{
  bold?: boolean
  color?: string
  fontSize?: string
  inline?: boolean
  lineHeight?: string
  margin?: string
}>`
  color: ${(props) => (props.color ? props.color : colors.basic)};
  display: ${(props) => (props.inline ? 'inline' : 'inherit')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 'inherit')};
  font-weight: ${(props) => (props.bold ? 'bold' : 400)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '150%')};
  margin: ${(props) => (props.margin ? props.margin : 0)};
`
