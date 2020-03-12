import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Detail } from './detail'
import { Notification } from './notification'
import { getShipmentDetails } from '../utils/get-shipment-details'
import close from '../images/close.png'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`
const H1 = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-left: ${props => props.theme.marginLeft};

  @media only screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    font-size: 1.6rem;
    margin-top: 1.8rem;
  }
`

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin: 1rem 2rem 0 0;
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid white;
  border-radius: 50rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primaryHover};
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    margin-lright: 1rem;
  }
`

export const DetailsPage = ({ data, shipmentId, hideDetails, setNewName }) => {

  const details = getShipmentDetails(data, shipmentId)

  return (
    <div data-cy='details-page'>
      <Header>
        <H1>Shipment Details</H1>
        <CloseButton data-cy='close' onClick={hideDetails}>
          <img src={close} alt='close' />
        </CloseButton>
      </Header>
      {details && Object.entries(details).map(detail =>
        <Detail
          key={detail[0]}
          detail={detail}
          setNewName={setNewName}
          shipmentId={shipmentId}
        />
      )}
      {!details && <Notification message='The shipment was not found' />}
    </div>
  )
}

DetailsPage.propTypes = {
  data: PropTypes.array.isRequired,
  shipmentId: PropTypes.string.isRequired,
  hideDetails: PropTypes.func.isRequired,
  setNewName: PropTypes.func.isRequired,
}
