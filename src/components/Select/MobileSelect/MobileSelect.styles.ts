import styled from 'styled-components';
import { darken } from 'polished';
import { StyledSelectTypes } from '../Select.types';

const StyledMobileSelect = styled.button<StyledSelectTypes>`
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
    switch(props.inputSize) {
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

export default StyledMobileSelect;
