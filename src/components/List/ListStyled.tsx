import styled from 'styled-components'

import { colors } from 'constants/colors'

export const StyledList = styled.div<{ margin?: string }>`
  padding: 0 16px;
  margin: ${(props) => (props.margin ? props.margin : 0)};

  & > * {
    padding: 12px 0;
    border-bottom: 2px solid ${colors.veryLightGray};
  }
`
