import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ImageWrapper } from '../common/image-wrapper'
import { toProperCase } from '../../utils/to-proper-case'
import { ASC } from '../constants'
import chevronUp from '../../images/chevron-up.png';
import chevronDown from '../../images/chevron-down.png';
import chevronInactive from '../../images/chevron-inactive.png';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
  align-items: center;
  color: white;
  background-color: ${props => props.theme.colors.primary};
`

const Select = styled.select`
  height: 2rem;
  border: none;
  outline: none;
  font-size: 1rem;
  text-indent: 1rem;
  background-color: white;
`

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 800;
  margin: 1rem;
`

export const MobileTableHeader = ({ fields, sort }) => {

  const [ sortField, setSortField ] = useState('id')

  const changeHandler = event => {
      setSortField(event.target.value)
      sort(event.target.value)
  }

  const clickHandler = event => {
      sort(sortField)
  }

  return (
    <Wrapper>
      <Text>Sort by:</Text>
      <Select onChange={changeHandler}>
        {Object.keys(fields).map(item => <option key={item} value={item}>{toProperCase(item)}</option>)}
      </Select>
      <ImageWrapper onClick={clickHandler}>
        <img src={fields[sortField].sort ? (fields[sortField].order === ASC ? chevronUp : chevronDown) : chevronInactive} alt={fields[sortField].order === ASC ? 'ASC' : 'DSC'} />
      </ImageWrapper>
    </Wrapper>
  )
}

MobileTableHeader.propTypes = {
  fields: PropTypes.object.isRequired,
  sort: PropTypes.func.isRequired,
}
