import styled from 'styled-components';
import { StyledAppHeaderType } from './AppHeader.types';
import DefaultTheme from 'themes';

const StyledAppHeader = styled.div<StyledAppHeaderType>`
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-column-gap: 20px;
  align-items: center;
  background-color: ${props => props.theme.colors.header};
  padding: 15px 20px;
  border-radius: ${props => props.isRounded ? '0px 0px 20px 20px' : '0px'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

StyledAppHeader.defaultProps = {
  theme: DefaultTheme,
  isRounded: false,
};

export default StyledAppHeader;
