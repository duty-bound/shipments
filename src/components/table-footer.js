import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ImageWrapper } from './common/image-wrapper'
import { Text } from './common/text'
import { PREVIOUS, NEXT } from './constants'
import chevronLeft from '../images/chevron-left.png';
import chevronRight from '../images/chevron-right.png';
import chevronLeftInactive from '../images/chevron-left-inactive.png';
import chevronRightInactive from '../images/chevron-right-inactive.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${props => props.theme.colors.textHeaders};
  background-color: ${props => props.theme.colors.primary};
`

export const TableFooter = ({ changePage, currentPage, maxPage }) =>
  <Wrapper>
    <ImageWrapper name={PREVIOUS} onClick={changePage}>
      <img src={currentPage > 1 ? chevronLeft : chevronLeftInactive} alt='<' />
    </ImageWrapper>
    <Text>{`Page ${currentPage} / ${maxPage}`}</Text>
    <ImageWrapper data-cy='next-page' name={NEXT} onClick={changePage}>
      <img src={currentPage < maxPage ? chevronRight : chevronRightInactive} alt='>' />
    </ImageWrapper>
  </Wrapper>

TableFooter.propTypes = {
  changePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
}
