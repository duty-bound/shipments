import React from 'react'
import PropTypes from 'prop-types'
import { DetailTable } from './detail-table'

export const TabularDetail = ({ details }) =>
    <div>
      {details.map((detail, i) => <DetailTable key={i} detail={detail}/>)}
    </div>

TabularDetail.propTypes = {
  details: PropTypes.array.isRequired,
}
