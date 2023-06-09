# react-emotion-naming

[![Testing](https://github.com/kirilenko/react-emotion-naming/actions/workflows/test.yml/badge.svg)](https://github.com/kirilenko/react-emotion-naming/actions/workflows/test.yml)

This is a helper for [@emotion/react](https://www.npmjs.com/package/@emotion/react).  

This package enhances the attached CSS class name on any component with richer output to help identify your components in the DOM by debug.  

In your page source, when debug is enabled, you see:  
```typescript jsx
<div class="__FeedbackForm__ css-1gnta30">
```
instead of just
```typescript jsx
<div class="css-1gnta30">
```

## Requirements

- `@emotion/react`: ^11,
- `@emotion/styled`: ^11,
- `classnames`: ^2,
- `react`: ^16.8

## Installation

```bash
npm i react-emotion-naming
```
or
```bash
yarn add react-emotion-naming
```

## Usage

__app.tsx__ (with provider as a wrapper):
```typescript jsx
import { FC } from 'react'
import { EmotionNamingProvider } from 'react-emotion-naming'

import Home from '@pages/home'
import Smt from '@widgets/smt'

const App: FC = () => (
  <EmotionNamingProvider debugEnabled={import.meta.env.MODE !== 'production'}>
    <Smt />
    <Home />
  </EmotionNamingProvider>
)

export default App
```

or __app.tsx__ (with provider as a HOC `withEmotionNamingProvider`):
```typescript jsx
import { FC } from 'react'
import { withEmotionNamingProvider } from 'react-emotion-naming'

import Home from '@pages/home'
import Smt from '@widgets/smt'

const App: FC = () => (
  <>
    <Smt />
    <Home />
  </>
)

export default withEmotionNamingProvider.apply(
  { debugEnabled: import.meta.env.MODE !== 'production' },
  [App],
)
```

__smt.tsx__ (as example with a hook `useEmotionNaming`):
```typescript jsx
import { FC } from 'react'

import { useEmotionNaming } from 'react-emotion-naming'

import StyledSmt from './smt.style'

const Smt: FC = () => {
  const setClassName = useEmotionNaming()

  return <StyledSmt className={setClassName('Smt')}>smt</StyledSmt>
}

export default Smt
```

__smt.style.ts__:
```typescript jsx
import styled from '@emotion/styled'

const StyledSmt = styled.span`
  // some styles
`

export default StyledSmt

```

__home.tsx__ (as example with a HOC `withEmotionNaming`):
```typescript jsx
import { FC } from 'react'

import {
  PropsWithEmotionNaming,
  withEmotionNaming,
} from 'react-emotion-naming'

import StyledHome from './home.style'

type Props = {
  // own props
}

const Home: FC<PropsWithEmotionNaming<Props>> = ({
  setClassName,
}) => (
  <StyledHome className={setClassName('Home')}>home</StyledHome>
)

export default withEmotionNaming(Home)
```

home.style.ts:
```typescript jsx
import styled from '@emotion/styled'

const StyledHome = styled.div`
  // some styles
`

export default StyledHome
```

## Options for `EmotionNamingProvider`

- ### debugEnabled

    Type: `boolean`
    
    Enable debug mode.

- ### template (optional)

    Type: `(p: string) => string`
    
    Default: `(p) => '__' + p + '__'`

## License

[MIT](https://choosealicense.com/licenses/mit/)

