export type ButtonPropTypes = {
  children: JSX.Element | string;
  type?: 'primary' | 'secondary' | 'danger' | 'ghost';
  variant?: 'filled' | 'outlined' | 'text';
  raised?: boolean;
  shape?: 'sharp' | 'rounded' | 'pill';
}
