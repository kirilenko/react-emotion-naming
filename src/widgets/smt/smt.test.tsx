import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { EmotionNamingProvider } from '@shared/lib/emotion-naming'
import { Smt } from '.'

describe('<Smt />', () => {
  test('Smt: mounts properly', () => {
    const wrapper = render(
      <EmotionNamingProvider
        debugEnabled
        template={(p) => `__${p.toUpperCase()}__`}
      >
        <Smt />
      </EmotionNamingProvider>,
    )

    expect(wrapper).toBeTruthy()

    const linkElement = screen.getByText(/smt/i)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toBeTruthy()
    expect(linkElement.className || '').toContain('__SMT__')
  })
})
