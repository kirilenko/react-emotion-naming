import { FC } from 'react'
import { Global } from '@emotion/react'

import { Home } from '@pages/home'
import { EmotionNamingProvider } from '@shared/lib/emotion-naming'

import GlobalStyles from './styles/global.style'

const App: FC = () => (
  <EmotionNamingProvider debugEnabled={import.meta.env.MODE !== 'production'}>
    <Global styles={GlobalStyles} />
    <Home />
  </EmotionNamingProvider>
)

export default App
