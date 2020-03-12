import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MobileTableHeader } from './mobile-table-header'
import { MobileCurrentPageShipments } from './mobile-current-page-shipments'

const Wrapper = styled.div`

  @media only screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    display: none;
  }
`

export const MobileTable = ({ shipments, sort, showDetails }) =>
  <Wrapper data-cy='shipments-page'>
    <MobileTableHeader fields={shipments.tableFields} sort={sort} />
    <MobileCurrentPageShipments shipments={shipments} showDetails={showDetails} />
  </Wrapper>

MobileTable.propTypes = {
  shipments: PropTypes.object.isRequired,
  sort: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired,
}
