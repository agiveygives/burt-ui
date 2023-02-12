export type StyledSelectTypes = {
  variation: 'primary' | 'secondary' | 'ghost';
  inputSize: 'large' | 'medium' | 'small';
  rounded: 'hard' | 'soft';
  isDisabled: boolean;
};

export type BaseSelectProps = {
  placeholder: string;
  options: {
    value: string | number;
    display: string;
  }[];
} & StyledSelectTypes;

export type SelectTypes = {
  type: 'styled' | 'native' | 'mobile' | 'auto';
} & StyledSelectTypes & BaseSelectProps;
