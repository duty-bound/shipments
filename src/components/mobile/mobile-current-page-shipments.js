import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ShipmentMobile } from './shipment-mobile'
import { SHIPMENTS_PER_PAGE } from '../constants'

export const MobileCurrentPageShipments = ({ shipments, showDetails }) => {

  const start = (shipments.currentPage - 1) * SHIPMENTS_PER_PAGE
  const end = start + SHIPMENTS_PER_PAGE
  const shipmentsToDisplay = shipments.data.slice(start, end)

  return (
    <>
    {shipmentsToDisplay.map(shipment => {
      const {id, name, origin, destination, status} = shipment
      return <ShipmentMobile
          key={id}
          id={id}
          name={name}
          origin={origin}
          destination={destination}
          status={status}
          showDetails={showDetails}
        />})
      }
    </>
  )
}

MobileCurrentPageShipments.propTypes = {
  shipments: PropTypes.object.isRequired,
  showDetails: PropTypes.func.isRequired,
}
