import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import OverflowMenuPage from 'pages/OverflowMenuPage'

import { GlobalStyled } from 'styles/global'

const App = (): JSX.Element => (
  <div className="App">
    <GlobalStyled />
    <OverflowMenuPage />
  </div>
)

library.add(fab, fas)

export default App
