export const getUpdatedShipmentsData = (data, shipmentId, newName) => {
  const newData = Array.from(data)

  for(let i = 0; i < newData.length; i++) {
    if(newData[i].id == shipmentId) {
      newData[i].name = newName
    }
  }

  return newData
}
