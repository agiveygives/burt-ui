import styled from 'styled-components';
import { darken } from 'polished';
import DefaultTheme from 'themes';
import { ButtonType } from './Button.types';

const StyledButton = styled.button<ButtonType>`
  padding: 0.5rem;
  font-weight: 700;
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  transition: 0.3s ease-in-out;

  &:active:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  &:hover, &:active {
    font-weight: 600;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  /* variation Styles */
  ${props => {
    switch(props.variation) {
      case 'secondary':
        return`
          color: ${props.theme.colors.secondary};
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `
      case 'ghost':
        return`
          background-color: transparent;
          color: ${props.theme.colors.ghost};
        `
      case 'primary':
      default:
        return`
          color: ${props.theme.colors.white};
          background-color: ${props.theme.colors.primary};

          &:hover, &:active {
            background-color: ${darken(0.15, props.theme.colors.primary)};
          }
        `
    }
  }}

  /* size */
  ${props => {
    switch(props.size) {
      case 'large':
        return`
          font-size: 16px;
          padding: 12px 24px;
        `
      case 'small':
        return`
          font-size: 12px;
          padding: 10px 16px;
        `
      case 'medium':
      default:
        return`
          font-size: 14px;
          padding: 11px 20px;
        `
    }
  }}

  /* rounded */
  ${props => {
    switch(props.rounded) {
      case 'hard':
        return`
          border-radius: 8px;
        `
      case 'soft':
      default:
        return`
          border-radius: 25px;
        `
    }
  }}

  /* states */
  ${props => {
    if (props.isDisabled) {
      return `
        background: white;
        border: solid 0.5px lightgray;
        color: lightgray;
        cursor: not-allowed;
        box-shadow: none;
      `
    }
  }}
`;

StyledButton.defaultProps = {
  theme: DefaultTheme,
}

export default StyledButton;
