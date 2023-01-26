import { housesToDistricts } from '../../helpers'

describe('housesToDistricts', () => {
  it('should return an empty object if no houses are passed', () => {
    const result = housesToDistricts([])
    expect(result).toEqual({})
  })

  it('should return an object with the correct structure', () => {
    const result = housesToDistricts([
      { district: 'A', price: 100 },
      { district: 'A', price: 200 },
      { district: 'B', price: 300 },
    ])
    expect(result).toEqual({
      A: {
        id: 'A',
        district: 'A',
        count: 2,
        sum: 300,
        avgPrice: undefined,
        maxPrice: 200,
      },
      B: {
        id: 'B',
        district: 'B',
        count: 1,
        sum: 300,
        avgPrice: undefined,
        maxPrice: 300,
      },
    })
  })
})
