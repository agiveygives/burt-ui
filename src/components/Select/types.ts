export interface BaseSelectPropTypes {
  className?: string;
  type?: 'native' | 'styled' | 'mobile';
  options: {
    value: string | number;
    display: string;
  }[];
  defaultValue?: string | number;
}
