import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TableHeader } from './table-header'
import { CurrentPageShipments } from './current-page-shipments'

const Wrapper = styled.div`
  @media only screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    display: none;
  }
`

export const DesktopTable = ({ shipments, sort, showDetails }) =>
  <Wrapper data-cy='shipments-page' >
    <TableHeader fields={shipments.tableFields} sort={sort}/>
    <CurrentPageShipments shipments={shipments} showDetails={showDetails}/>
  </Wrapper>

DesktopTable.propTypes = {
  shipments: PropTypes.object.isRequired,
  sort: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired,
}
