import { createGlobalStyle } from 'styled-components'

import { colors } from 'constants/colors'

export const GlobalStyled = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  #root {
    --app-height: 100vh;
  }
  html, body, #root {
    min-height: 100vh;
  }
  body {
    color: ${colors.basic};
    background: ${colors.white};
    box-sizing: border-box;
    font-family: 'Helvetica', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
