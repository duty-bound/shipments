import { getUpdatedShipmentsData } from './get-updated-shipments-data'

describe('updates the name property of the element denoted by the second parameter', () => {

  const arr = [
    { id: 1, name: 'Jack' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jenny' },
  ]

  const newArr = [
    { id: 1, name: 'Jack' },
    { id: 2, name: 'Jacob' },
    { id: 3, name: 'Jenny' },
  ]

  test('return an updated array with the property name of the element whose id matches the second parameter updated with name supplied as the third parameter', () => {
    expect(JSON.stringify(getUpdatedShipmentsData(arr, 2, 'Jacob'))).toEqual(JSON.stringify(newArr))
  })

  test('return the same array in case there is no match', () => {
    expect(JSON.stringify(getUpdatedShipmentsData(arr, 22, 'Jacob'))).toEqual(JSON.stringify(arr))
  })
})
