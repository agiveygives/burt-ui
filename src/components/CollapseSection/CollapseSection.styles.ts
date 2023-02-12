import styled from 'styled-components';
import { darken } from 'polished';
import { StyledCollapseSectionTypes } from './CollapseSection.types';

const StyledCollapseSection = styled.article<StyledCollapseSectionTypes>`
  .section-header {
    cursor: pointer;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 5px;
    text-align: left;
    padding: 10px 20px;

    ${props => {
      switch (props.variation) {
        case 'primary':
          return `
            background-color: ${props.theme.colors.primary};
            color: ${props.theme.colors.white};
          `;
        case 'ghost':
          return`
            background-color: transparent;
            color: ${props.theme.colors.ghost};
          `;
        case 'secondary':
        default:
          return`
            background-color: transparent;
            color: ${props.theme.colors.secondary};
          `;
      }
    }}

    &:hover {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      ${props => {
        if (props.variation === 'primary') {
          return`background-color: ${darken(0.15, props.theme.colors.primary)};`
        }
      }
      }
    }
  }

  .header-icon {
    transform: rotate(0deg);
    margin-right: 10px;
    height: 20px;
    transition: transform 0.5s ease-in-out;
  }

  .collapsed-icon {
    transform: rotate(-90deg);
  }

  .section-header > h2 {
    display: inline;
    margin: 0px;
  }

  .content {
    height: auto;
    overflow-x: auto;
    overflow-y: hidden;
    transition: height 0.5s ease-in-out;
  }
`;

export default StyledCollapseSection;
