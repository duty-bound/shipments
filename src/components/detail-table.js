import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { toProperCase } from '../utils/to-proper-case'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10rem auto;
  margin-bottom: 1.5rem;
  margin-right: 2rem;
  color: ${props => props.theme.colors.text};
  border-top: 1px solid ${props => props.theme.colors.tableBorder};
  border-left: 1px solid ${props => props.theme.colors.tableBorder};
`

const Item = styled.p`
  font-size: 0.9rem;
  padding: 0.2rem;
  border-right: 1px solid ${props => props.theme.colors.tableBorder};
  border-bottom: 1px solid ${props => props.theme.colors.tableBorder};
  margin: 0;
`

export const DetailTable = ({ detail }) =>
    <Wrapper>
      {Object.entries(detail).flat().map((item, i) =>
        <Item key={i}>{toProperCase(item)}</Item>
      )}
    </Wrapper>

DetailTable.propTypes = {
  detail: PropTypes.object.isRequired,
}
