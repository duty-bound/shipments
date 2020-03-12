import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ImageWrapper } from './common/image-wrapper'
import close from '../images/close.png'
import checkmark from '../images/checkmark.png'

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  margin: 1rem 0 2rem 0;
`

const InputWrapper = styled.div`
  @keyframes drop {
    from {
      height: 0rem;
    }
  }

  display: flex;
  align-items: center;
  height: 2.6rem;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.primary};
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 6px;
  outline: none;
  animation: drop .2s ease-in-out;
`

const Input = styled.input`
  width: 20rem;
  height: 100%;
  font-size: 1rem;
  text-indent: 1rem;
  color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  cursor: pointer;

  @media only screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    width: 10rem;
  }
`

export const Renamer = ({ closeHandler, setNewName, shipmentId }) => {

  const [inputName, setInputName] = useState('')

  const changeHandler = event => setInputName(event.target.value)

  const renameHandler = () => {
    closeHandler()

    if(inputName.length > 0) {
      setNewName(shipmentId, inputName)
    }
  }

  return (
    <Wrapper>
      <InputWrapper>
        <ImageWrapper data-cy='renamer-close' onClick={closeHandler}>
          <img src={close} alt='close' />
        </ImageWrapper>
        <Input data-cy='renamer-input' value={inputName} onChange={changeHandler}/>
        <ImageWrapper onClick={renameHandler}>
          <img data-cy='renamer-ok' src={checkmark} alt='checkmark' />
        </ImageWrapper>
      </InputWrapper>
    </Wrapper>
  )
}

Renamer.propTypes = {
  closeHandler: PropTypes.func.isRequired,
  setNewName: PropTypes.func.isRequired,
  shipmentId: PropTypes.string.isRequired,
}
