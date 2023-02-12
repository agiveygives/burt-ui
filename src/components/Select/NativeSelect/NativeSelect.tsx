import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import StyledNativeSelect from './NativeSelect.styles';
import { BaseSelectProps } from '../Select.types';

const NativeSelect: FC<BaseSelectProps> = ({
  variation, inputSize, rounded, isDisabled, placeholder, options
}) => {
  const theme = useTheme();

  return (
    <StyledNativeSelect
      variation={variation}
      inputSize={inputSize}
      rounded={rounded}
      isDisabled={isDisabled}
      placeholder={placeholder}
      theme={theme}
    >
      <option value='' disabled selected hidden>{placeholder}</option>
      {
        options.map(({ value, display }) => (
          <option key={value} value={value}>{display}</option>
        ))
      }
    </StyledNativeSelect>
  );
}

export default NativeSelect;
