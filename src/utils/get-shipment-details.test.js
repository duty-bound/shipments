import { getShipmentDetails } from './get-shipment-details'

describe('Returns the element identified by the second parameter from the array in the first parameter', () => {

  const arr = [
    {id: 1, value: 'a'},
    {id: 2, value: 'b'},
    {id: 3, value: 'c'},
  ]

  test('returns the array element that matches the "id" supplied as a second parameter', () => {
    expect(JSON.stringify(getShipmentDetails(arr, 2))).toEqual(JSON.stringify(arr[1]))
  })

  test('returns null if no array element matches the "id" supplied as a second parameter', () => {
    expect(getShipmentDetails(arr, 222)).toEqual(null)
  })
})
