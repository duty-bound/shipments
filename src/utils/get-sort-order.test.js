import { getSortOrder } from './get-sort-order'

describe('Returns the sorting order (ASC or DSC) depending on whether a field is already sorted or not', () => {

  const ASC = 'ASC'
  const DSC = 'DSC'

  const tableFields = {
    id: {
      name: 'id',
      displayName: 'ID',
      order: ASC,
      sort: true,
    },
    name: {
      name: 'name',
      displayName: 'Name',
      order: DSC,
      sort: true,
    },
    origin: {
      name: 'origin',
      displayName: 'Origin',
      order: ASC,
      sort: false,
    },
    destination: {
      name: 'destination',
      displayName: 'Destination',
      order: ASC,
      sort: true,
    },
    status: {
      name: 'status',
      displayName: 'Status',
      order: DSC,
      sort: false,
    },
  }

  test('return DSC when the property denoted by the second parameter has properties sort = true and order = ASC', () => {
    expect(getSortOrder(tableFields, 'id')).toEqual(DSC)
  })

  test('return ASC when the property denoted by the second parameter has properties sort = true and order = DSC', () => {
    expect(getSortOrder(tableFields, 'name')).toEqual(ASC)
  })

  test('return ASC when the property denoted by the second parameter has properties sort = false and order = ASC', () => {
    expect(getSortOrder(tableFields, 'origin')).toEqual(ASC)
  })

  test('return DSC when the property denoted by the second parameter has properties sort = false and order = DSC', () => {
    expect(getSortOrder(tableFields, 'status')).toEqual(DSC)
  })

})
