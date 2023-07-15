import React from 'react';
import StyledSelect from './StyledSelect';
import { BaseSelectPropTypes } from './types';

const Select = ({ className, options }: BaseSelectPropTypes) => {
	return (
		<StyledSelect className={className} options={options} />
	);
};

export default Select;
