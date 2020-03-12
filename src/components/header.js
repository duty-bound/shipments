import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ImageWrapper } from './common/image-wrapper'
import magnifyingGlass from '../images/magnifying-glass.png'
import close from '../images/close.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 3.8rem;
  padding-right: 1rem;
  background-color: ${props => props.theme.colors.header};
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  background-color: ${props => props.theme.colors.primary};
  border-radius: 0.5rem;
`

const Input = styled.input`
  @keyframes expand {
    from {
      width: 0rem;
    }
  }

  width: 10rem;
  max-width: 60%;
  height: 2.6rem;
  font-size: 1.6rem;
  text-indent: 1rem;
  color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  animation: expand .2s ease-in-out;
`

export const Header = ({ onSearch }) => {

  const [isExpanded, setIsExpanded] = useState(false)
  const [searchText, setSearchText] = useState('')

  const onOpenSearchBox = () =>
    setIsExpanded(true)

  const onCloseSearchBox = () => {
    setIsExpanded(false)
    setSearchText('')
  }

  const handleOnChange = event =>
    setSearchText(event.target.value)

  const initiateSearch = () => {
    if(searchText.length > 0) {
      onSearch(searchText)
    }
  }

  return (
      <Wrapper>
      {!isExpanded &&
        <ImageWrapper data-cy='search' onClick={onOpenSearchBox}>
          <img src={magnifyingGlass} alt='magnifying-glass' />
        </ImageWrapper>
      }
      {isExpanded &&
        <InputWrapper>
          <ImageWrapper onClick={onCloseSearchBox}>
            <img src={close} alt='close' />
          </ImageWrapper>
          <Input data-cy='search-input' value={searchText} onChange={handleOnChange}/>
          <ImageWrapper data-cy='initiate-search' onClick={initiateSearch}>
            <img src={magnifyingGlass} alt='magnifying-glass' />
          </ImageWrapper>
        </InputWrapper>
      }
    </Wrapper>
  )
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
}
