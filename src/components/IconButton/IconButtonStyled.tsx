import styled from 'styled-components'
import hexRgb from 'hex-rgb'

import { colors } from 'constants/colors'

export const StyledIconButton = styled.button<{
  size?: number
  iconSize?: number
  background?: string
  iconColor?: string
}>`
  width: ${(props) => (props.size ? props.size : '32px')};
  height: ${(props) => (props.size ? props.size : '32px')};
  font-size: ${(props) => (props.iconSize ? props.iconSize : '18px')};
  line-height: ${(props) => (props.iconSize ? props.iconSize : '18px')};
  color: ${(props) => (props.iconColor ? props.iconColor : colors.white)};
  background: ${(props) => (props.background ? props.background : hexRgb(colors.basic, { alpha: 0.3, format: 'css' }))};
  border-radius: 50%;
  border: none;
`
