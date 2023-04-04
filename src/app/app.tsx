import { FC } from 'react'
import { withEmotionNamingProvider } from 'react-emotion-naming'
import { Global } from '@emotion/react'

import { Home } from '@pages/home'

import GlobalStyles from './styles/global.style'

const App: FC = () => (
  <>
    <Global styles={GlobalStyles} />
    <Home />
  </>
)

export default withEmotionNamingProvider.apply(
  {
    debugEnabled: import.meta.env.MODE !== 'production',
  },
  [App],
)
