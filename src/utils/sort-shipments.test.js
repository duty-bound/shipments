import { sortShipments } from './sort-shipments'

describe('sorts an array with object-literal elements according to the supplied sorting-field in either ascending or descending order', () => {

  const ASC = 'ASC'
  const DSC = 'DSC'

  const arr = [
      { id: 3, value: 33},
      { id: 1, value: 11},
      { id: 4, value: 44},
      { id: 2, value: 22},
  ]

  const arrAsc = [
      { id: 1, value: 11},
      { id: 2, value: 22},
      { id: 3, value: 33},
      { id: 4, value: 44},
  ]

  const arrDsc = [
      { id: 4, value: 44},
      { id: 3, value: 33},
      { id: 2, value: 22},
      { id: 1, value: 11},
  ]

  test('sort array in ascending order according to the property "id"', () => {
    expect(JSON.stringify(sortShipments(arr, 'id', ASC))).toEqual(JSON.stringify(arrAsc))
  })

  test('sort array in ascending order according to the property "value"', () => {
    expect(JSON.stringify(sortShipments(arr, 'value', ASC))).toEqual(JSON.stringify(arrAsc))
  })

  test('sort array in descending order according to the property "id"', () => {
    expect(JSON.stringify(sortShipments(arr, 'id', DSC))).toEqual(JSON.stringify(arrDsc))
  })

})
