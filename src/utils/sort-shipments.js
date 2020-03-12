import { ASC, DSC } from '../components/constants'

export const sortShipments = (shipmentsData, sortField, sortOrder) => {
  const newShipmentsData = Array.from(shipmentsData)

  sortOrder === ASC ?
    newShipmentsData.sort((a, b) => a[sortField] > b[sortField] ? 1 : -1)
    :
    newShipmentsData.sort((a, b) => b[sortField] > a[sortField] ? 1 : -1)

  return newShipmentsData
}
