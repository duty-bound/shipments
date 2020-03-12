import { updateHeader } from './update-header'

describe('updates an object literal denoting which fields are sorted and in which order', () => {

  const ASC = 'ASC'
  const DSC = 'DSC'

  const tableFields = {
    id: {
      name: 'id',
      displayName: 'ID',
      order: ASC,
      sort: false,
    },
    name: {
      name: 'name',
      displayName: 'Name',
      order: ASC,
      sort: false,
    }
  }

  const newTableFields = {
    id: {
      name: 'id',
      displayName: 'ID',
      order: ASC,
      sort: false,
    },
    name: {
      name: 'name',
      displayName: 'Name',
      order: DSC,
      sort: true,
    }
  }

  test('return a new object-literal with the properties "order" and "sort" of the field denoted by the second parameter changed to "DSC" and "true" respectively', () => {
    expect(JSON.stringify(updateHeader(tableFields, 'name', DSC))).toEqual(JSON.stringify(newTableFields))
  })

})
