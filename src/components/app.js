import React, { useState, useEffect } from 'react'
import { Header } from './header'
import { DesktopTable} from './desktop/desktop-table'
import { MobileTable} from './mobile/mobile-table'
import { TableFooter } from './table-footer'
import { DetailsPage } from './details-page'
import { updateHeader } from '../utils/update-header'
import { getSortOrder } from '../utils/get-sort-order'
import { sortShipments } from '../utils/sort-shipments'
import { getShipmentDetails } from '../utils/get-shipment-details'
import { getUpdatedShipmentsData } from '../utils/get-updated-shipments-data'
import { tableFields, SHIPMENTS_PER_PAGE, PREVIOUS, NEXT } from './constants'

export const App = () => {

  const [detailsPage, setDetailsPage] = useState({
      show: false,
      shipmentId: '',
  })

  const [shipments, setShipments] = useState( {
    data: [],
    tableFields: tableFields,
    currentPage: 1,
    maxPage: 1,
  })

  React.useEffect(() => {
    const url = 'http://localhost:3000/shipments'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setShipments({ ...shipments, data: data, maxPage: Math.ceil(data.length / SHIPMENTS_PER_PAGE)})})
  }, [])

  const sort = sortField => {
    const sortOrder = getSortOrder(shipments.tableFields, sortField)

    const newTableFields = updateHeader(shipments.tableFields, sortField, sortOrder)
    const newShipmentsData = sortShipments(shipments.data, sortField, sortOrder)

    setShipments({...shipments, data: newShipmentsData, tableFields: newTableFields, currentPage: 1})
  }

  const changePage = event => {
    const action = event.currentTarget.getAttribute('name')

    if(action === PREVIOUS && shipments.currentPage > 1) {
        const currentPage = shipments.currentPage - 1
        setShipments({...shipments, currentPage: currentPage})
    } else if (action === NEXT && shipments.currentPage < shipments.maxPage) {
        const currentPage = shipments.currentPage + 1
        setShipments({...shipments, currentPage: currentPage})
    }
  }

  const onSearch = shipmentId => {
    setDetailsPage({shipmentId: shipmentId, show: true})
  }

  const showDetails = event => {
    const shipmentId =  event.currentTarget.getAttribute('id')
    setDetailsPage({shipmentId: shipmentId, show: true})
  }

  const hideDetails = () => {
    setDetailsPage({shipmentId: '', show: false})
  }

  const setNewName = (shipmentId, newName) => {

    const url = `http://localhost:3000/shipments/${shipmentId}`
    const data = Object.assign({}, getShipmentDetails(shipments.data, shipmentId))
    data.name = newName

    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(response => {
      if(response.ok) {
        const newShipmentsData = getUpdatedShipmentsData(shipments.data, shipmentId, newName)
        setShipments({ ...shipments, data: newShipmentsData })
      } else {
        // notify user: not implmented
      }
    })
  }

  return (
    <>
      <Header onSearch={onSearch}/>
      {!detailsPage.show &&
      <>
        <DesktopTable  data-cy='shipments' shipments={shipments} sort={sort} showDetails={showDetails} />
        <MobileTable data-cy='shipments-mobile' shipments={shipments} sort={sort} showDetails={showDetails} />
        <TableFooter changePage={changePage} currentPage={shipments.currentPage} maxPage={shipments.maxPage}/>
      </>}
      {detailsPage.show &&
        <DetailsPage
          data={shipments.data}
          shipmentId={detailsPage.shipmentId}
          hideDetails={hideDetails}
          setNewName={setNewName}
        />}
    </>
  )
}

// {shipments.map(shipment => <shipment props = {id, name, origin, destination, status} = shipment/>)}
