import styled from 'styled-components'

export const StyledList = styled.div<{ margin?: string }>`
  padding: 0 16px;
  margin: ${(props) => (props.margin ? props.margin : 0)};
`
