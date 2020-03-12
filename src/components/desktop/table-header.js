import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from '../common/text'
import { ASC } from '../constants'
import chevronUp from '../../images/chevron-up.png';
import chevronDown from '../../images/chevron-down.png';
import chevronInactive from '../../images/chevron-inactive.png';


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.columnWidths};
  grid-column-gap: ${props => props.theme.columnGap};
  align-items: center;
  padding: 0 1rem;
  color: ${props => props.theme.colors.textHeaders};
  background-color: ${props => props.theme.colors.primary};
  border-radius-top-left: ${props => props.theme.borderRadius};
  border-radius-top-right: ${props => props.theme.borderRadius};
`

const HeaderField = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color:  ${props => props.theme.colors.primaryHover};
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  cursor: pointer;
`

export const TableHeader = ({ fields, sort }) => {

  const [ sortField, setSortField ] = useState('id')

  const clickHandler = event => {
    const fieldName = event.currentTarget.getAttribute('name')
      setSortField(fieldName)
      sort(fieldName)
  }

  return (
    <Wrapper>
        <HeaderField name={fields.id.name} onClick={clickHandler}>
          <Text>{fields.id.displayName}</Text>
          <ImageWrapper>
            <img src={fields.id.sort ? (fields.id.order === ASC ? chevronUp : chevronDown) : chevronInactive} alt={fields.id.order === ASC ? 'ASC' : 'DSC'} />
          </ImageWrapper>
        </HeaderField>
        <HeaderField name={fields.name.name} onClick={clickHandler}>
          <Text>{fields.name.displayName}</Text>
          <ImageWrapper>
            <img src={fields.name.sort ? (fields.name.order === ASC ? chevronUp : chevronDown) : chevronInactive} alt={fields.id.order === ASC ? 'ASC' : 'DSC'} />
          </ImageWrapper>
        </HeaderField>
        <HeaderField name={fields.origin.name} onClick={clickHandler}>
          <Text>{fields.origin.displayName}</Text>
          <ImageWrapper>
            <img src={fields.origin.sort ? (fields.origin.order === ASC ? chevronUp : chevronDown) : chevronInactive} alt={fields.id.order === ASC ? 'ASC' : 'DSC'} />
          </ImageWrapper>
        </HeaderField>
        <HeaderField name={fields.destination.name} onClick={clickHandler}>
          <Text>{fields.destination.displayName}</Text>
          <ImageWrapper>
            <img src={fields.destination.sort ? (fields.destination.order === ASC ? chevronUp : chevronDown) : chevronInactive} alt={fields.id.order === ASC ? 'ASC' : 'DSC'} />
          </ImageWrapper>
        </HeaderField>
        <HeaderField name={fields.status.name} onClick={clickHandler}>
          <Text>{fields.status.displayName}</Text>
          <ImageWrapper>
            <img src={fields.status.sort ? (fields.status.order === ASC ? chevronUp : chevronDown) : chevronInactive} alt={fields.id.order === ASC ? 'ASC' : 'DSC'} />
          </ImageWrapper>
        </HeaderField>
          <Text>{fields.info.displayName}</Text>
    </Wrapper>
)
}

TableHeader.propTypes = {
  fields: PropTypes.object.isRequired,
  sort: PropTypes.func.isRequired,
}
