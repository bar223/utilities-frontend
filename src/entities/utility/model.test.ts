import { describe, expect, it } from 'vitest'
import { UTILITIES_MOCK } from './mock'
import { nextUtilityId, selectUtilities } from './model'

describe('utilities collection', () => {
  it('restores all cards when the tariff is cleared', () => {
    expect(selectUtilities(UTILITIES_MOCK, null)).toHaveLength(6)
  })
  it('applies tariff inclusively and preserves the original collection', () => {
    expect(selectUtilities(UTILITIES_MOCK, 10).map((u) => u.id)).toEqual([1, 4])
    expect(selectUtilities(UTILITIES_MOCK, 6.1).map((u) => u.id)).toEqual([1])
    expect(UTILITIES_MOCK).toHaveLength(6)
  })
  it('handles an empty result and wraps navigation within the filtered set', () => {
    expect(selectUtilities(UTILITIES_MOCK, 0)).toEqual([])
    const filtered = selectUtilities(UTILITIES_MOCK, 10)
    expect(nextUtilityId(filtered, 1)).toBe(4)
    expect(nextUtilityId(filtered, 4)).toBe(1)
    expect(nextUtilityId([], 1)).toBeUndefined()
  })
})
