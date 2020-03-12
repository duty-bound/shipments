export const SHIPMENTS_PER_PAGE = 20
export const ASC = 'ASC'
export const DSC = 'DSC'
export const PREVIOUS = 'previous'
export const NEXT = 'next'

export const tableFields = {
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
    sort: false,
  },
  status: {
    name: 'status',
    displayName: 'Status',
    order: ASC,
    sort: false,
  },
  info: {
    displayName: 'Info',
  },
}
