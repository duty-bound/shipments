import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import info from '../../images/info.png';

const Wrapper = styled.div`
  position: relative;
  margin: 1rem 0.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.tableBorder};
`

const ImageWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Detail = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`

const DetailTitle = styled.p`
  color: ${props => props.theme.colors.primary};
`
const DetailText = styled.p`
  color: ${props => props.theme.colors.text};
`

export const ShipmentMobile = ({ id, name, origin, destination, status, showDetails }) => {

  return (
    <Wrapper data-cy='shipment-mobile'>
      <Detail>
        <DetailTitle>ID:</DetailTitle>
        <DetailText>{id}</DetailText>
      </Detail>
      <Detail>
        <DetailTitle>Name:</DetailTitle>
        <DetailText>{name}</DetailText>
      </Detail>
      <Detail>
        <DetailTitle>Origin:</DetailTitle>
        <DetailText>{origin}</DetailText>
      </Detail>
      <Detail>
        <DetailTitle>Destination:</DetailTitle>
        <DetailText>{destination}</DetailText>
      </Detail>
      <Detail>
        <DetailTitle>Status:</DetailTitle>
        <DetailText>{status}</DetailText>
      </Detail>
      <ImageWrapper id={id} data-cy='info-mobile' onClick={showDetails}>
        <img src={info} alt='i' />
      </ImageWrapper>
    </Wrapper>
)}

ShipmentMobile.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  showDetails: PropTypes.func.isRequired,
}
