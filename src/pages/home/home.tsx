import { FC } from 'react'

import {
  PropsWithEmotionNaming,
  withEmotionNaming,
} from '@shared/lib/emotion-naming'

import StyledHome from './home.style'

type Props = {}
const Home: FC<PropsWithEmotionNaming<Props>> = ({
  setClassName,
}: PropsWithEmotionNaming<Props>) => (
  <StyledHome className={setClassName('Home')}>home</StyledHome>
)

export default withEmotionNaming(Home)
