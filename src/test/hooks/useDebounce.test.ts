import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useDebounce } from '../../hooks/useDebounce'

import { act } from 'react'

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('delays value update until delay period passes', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: 500 } }
    )

    expect(result.current).toBe('initial')

    rerender({ value: 'updated', delay: 500 })
     
    expect(result.current).toBe('initial')
    
    act(()=> {
         vi.advanceTimersByTime(500)
    })
    
    expect(result.current).toBe('updated')
  })
})