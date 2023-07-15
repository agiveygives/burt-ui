import { NavigationType } from './Navigation/Navigation.types';

export type StyledAppHeaderType = {
  isRounded?: boolean;
}
export type AppHeaderType = {
  logoSrc: string;
} & NavigationType & StyledAppHeaderType;
