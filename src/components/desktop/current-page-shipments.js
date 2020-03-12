import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Shipment } from './shipment'
import { SHIPMENTS_PER_PAGE } from '../constants'

const RowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CurrentPageShipments = ({ shipments, showDetails }) => {

  const start = (shipments.currentPage - 1) * SHIPMENTS_PER_PAGE
  const end = start + SHIPMENTS_PER_PAGE

  const shipmentsToDisplay = shipments.data.slice(start, end)

  return (
    <RowsWrapper>
    {shipmentsToDisplay.map(shipment => {
      const {id, name, origin, destination, status} = shipment
      return <Shipment
          key={id}
          id={id}
          name={name}
          origin={origin}
          destination={destination}
          status={status}
          showDetails={showDetails}
        />})
      }
    </RowsWrapper>
  )
}

CurrentPageShipments.propTypes = {
  shipments: PropTypes.object.isRequired,
  showDetails: PropTypes.func.isRequired,
}
