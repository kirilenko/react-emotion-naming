import { FC } from 'react'

import {
  PropsWithEmotionNaming,
  withEmotionNaming,
} from '@shared/lib/emotion-naming'
import { Smt } from '@widgets/smt'

import StyledHome from './home.style'

type Props = {}
const Home: FC<PropsWithEmotionNaming<Props>> = ({
  setClassName,
}: PropsWithEmotionNaming<Props>) => (
  <StyledHome className={setClassName('Home')}>
    <Smt /> home
  </StyledHome>
)

export default withEmotionNaming(Home)
