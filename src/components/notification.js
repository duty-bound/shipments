import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from './common/text'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Notification = ({ message }) =>
  <Wrapper>
    <Text>{message}</Text>
  </Wrapper>

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}
