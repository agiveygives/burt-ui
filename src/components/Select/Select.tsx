import React, { FC } from 'react';
import NativeSelect from './NativeSelect';
import { SelectTypes } from './Select.types';

const Select: FC<SelectTypes> = ({
  type, variation, inputSize, rounded, isDisabled, placeholder, options
}) => {
  switch (type) {
    case 'styled':
      console.error('Styled Select Not Implemented. Falling back to Native Select.');
    case 'mobile':
      console.error('Mobile Select Not Implemented. Falling back to Native Select.');
    case 'native':
      return (
        <NativeSelect
          variation={variation}
          inputSize={inputSize}
          rounded={rounded}
          isDisabled={isDisabled}
          placeholder={placeholder}
          options={options}
        />
      );
    case 'auto':
    default:
      return <div>Auto Select Not Implemented</div>
  }
}

export default Select;
