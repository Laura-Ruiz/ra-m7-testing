import { byCity, byType, filterBy } from '../../helpers'

const mockHouse = {
    id: 1,
    title: 'Piso 1',
    price: 100000,
    image: 'https://kevinmamaqi.com/static/casas/1.jpg',
    type: 'garaje',
    city: 'madrid',
    district: 'Gotic',
    published: true,
    createdAt: '2020-05-01T00:00:00.000Z',
    updatedAt: '2020-05-01T00:00:00.000Z',
  }

describe('houseFilters', () => {
   
    it('should return true if city is not passed', () => {
        const result = byCity(mockHouse, null)
        expect(result).toEqual(true)
    })

    it('should return true if city is passed', () => {
        const result = byCity(mockHouse, "madrid")
        expect(result).toEqual(true)
    })

    it('should return true if type is not passed', () => {
        const result = byType(mockHouse, null)
        expect(result).toEqual(true)
    })

    it('should return true if type is passed', () => {
        const result = byType(mockHouse, "garaje")
        expect(result).toEqual(true)
    })

    it('should return true if type and city match the values of the house', () => {
        const result = filterBy(mockHouse, "madrid", "garaje")
        expect(result).toEqual(true)
    })

    it('should return false if type and city do not match the values of the house', () => {
        const result = filterBy(mockHouse, "madrid", "casa")
        expect(result).toEqual(false)
    })
})
