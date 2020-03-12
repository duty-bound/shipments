import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TabularDetail } from './tabular-detail'
import { Renamer } from './renamer'
import { toProperCase } from '../utils/to-proper-case'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10rem auto;
  font-size: 1.2rem;
  margin-left: ${props => props.theme.marginLeft};

  @media only screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    grid-template-columns: auto;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`

const DetailTitle = styled.p`
  margin: 0 0 0.5rem 0;
  color: ${props => props.theme.colors.primary};
`
const DetailText = styled.span`
  margin: 0.5rem 0;
  color: ${props => props.theme.colors.text};

  @media only screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    margin: 0 0 0 1rem;
  }
`

const RenameButton = styled.button`
  margin-left: 1rem;
  color: white;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primaryHover};
  }
`

export const Detail = ({ detail, setNewName, shipmentId }) => {

  const [isRenamerVisible, setIsRenamerVisible] = useState(false)

  const renameHandler = () => {
    setIsRenamerVisible(true)
  }

  const closeHandler = () => {
    setIsRenamerVisible(false)
  }

  return (
    <Wrapper>
      <DetailTitle>{toProperCase(detail[0])}:</DetailTitle>

      {!Array.isArray(detail[1]) &&
        <div>
          {detail[0] != 'name' && <DetailText>{detail[1]}</DetailText>}
          {detail[0] == 'name' &&
            <>
              <DetailText>{detail[1]}</DetailText>
              <RenameButton data-cy='rename-button' value={detail[1]} onClick={renameHandler}>Rename</RenameButton>
            </>
          }
        </div>
      }

      {Array.isArray(detail[1]) && <TabularDetail details={detail[1]} />}
      {isRenamerVisible &&
        <>
          <div /> {/*empty div to force 'Renamer' on the second column of the grid */}
          <Renamer
            closeHandler={closeHandler}
            setNewName={setNewName}
            shipmentId={shipmentId}
          />
        </>}
    </Wrapper>
  )
}

Detail.propTypes = {
    detail: PropTypes.array.isRequired,
    setNewName: PropTypes.func.isRequired,
    shipmentId: PropTypes.string.isRequired,
}
