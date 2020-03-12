import { ASC, DSC } from '../components/constants'

export const getSortOrder = (tableFields, sortField) => {
  if(tableFields[sortField].sort) {
    return tableFields[sortField].order === ASC ? DSC : ASC
  } else {
    return tableFields[sortField].order
  }
}
