import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ImageWrapper } from '../common/image-wrapper'
import info from '../../images/info.png';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.columnWidths};
  grid-column-gap: ${props => props.theme.columnGap};
  align-items: center;
  padding: 0 1rem;
  color: ${props => props.theme.colors.text};
  border-right: 1px solid ${'RGB(200, 200, 200)'};
  border-bottom: 1px solid ${'RGB(200, 200, 200)'};
  border-left: 1px solid ${'RGB(200, 200, 200)'};

  &:nth-child(2n) {
    background-color: ${'RGB(246, 246, 246)'};
  }
`

const Text = styled.p`
`

export const Shipment = ({id, name, origin, destination, status, showDetails}) =>
    <Wrapper data-cy='shipment'>
        <Text>{id}</Text>
        <Text>{name}</Text>
        <Text>{origin}</Text>
        <Text>{destination}</Text>
        <Text>{status}</Text>
        <ImageWrapper id={id} data-cy='info' onClick={showDetails}>
          <img src={info} alt='i' />
        </ImageWrapper>
    </Wrapper>

Shipment.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  showDetails: PropTypes.func.isRequired,
}
