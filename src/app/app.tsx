import { FC } from 'react'
import { Global } from '@emotion/react'

import { Home } from '@pages/home'
import { withEmotionNamingProvider } from '@shared/lib/emotion-naming'

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
