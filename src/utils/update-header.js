import { ASC, DSC } from '../components/constants'

export const updateHeader = (tableFields, sortField, sortOrder) => {

  const newTableFields = JSON.parse(JSON.stringify(tableFields))
  Object.keys(newTableFields).forEach(key => {
    newTableFields[key].order = ASC
    newTableFields[key].sort = false
  })

  newTableFields[sortField].sort = true
  newTableFields[sortField].order = sortOrder

  return newTableFields
}
