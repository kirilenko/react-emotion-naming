import { FC } from 'react'
import { useEmotionNaming } from 'react-emotion-naming'

import StyledSmt from './smt.style'

type Props = {}
const Smt: FC<Props> = () => {
  const setClassName = useEmotionNaming()

  return <StyledSmt className={setClassName('Smt')}>smt</StyledSmt>
}

export default Smt
