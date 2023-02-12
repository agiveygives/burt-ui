import styled from 'styled-components';
import { NavigationType } from './Navigation.types';

const StyledNavigation = styled.ul<NavigationType>`
  display: grid;
  grid-template-columns: ${props => (
    props.navItems.reduce((acc) => acc += 'max-content ', '').trimEnd()
  )};
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  list-style: none;
  padding: 0px;
  margin: 0px;

  & li:not(:last-child) {
    padding-right: 10px;
    border-right: 1px solid ${props => props.theme.colors.primary};
  }

  & li:not(:first-child) {
    padding-left: 10px;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    display: block;
    position: relative;
    padding: 2px 0;
    text-decoration: none;

    /* Fade in */
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1em;
      background-color: ${props => props.theme.colors.primary};
      opacity: 0;
      transition: opacity 300ms, transform 300ms;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
      transform: translate3d(0, 0.2em, 0);
    }

    /* Scale from center */
    &::after {
      opacity: 1;
      transform: scale(0);
      transform-origin: center;
    }

    &:hover::after,
    &:focus::after{
      transform: scale(1);
    }
  }
`;

export default StyledNavigation;
