import React from 'react';
import classNames from 'classnames';
import { ButtonPropTypes } from './types';
import styles from './styles.module.css';

const Button = ({ type, variant, raised, shape, children }: ButtonPropTypes) => (
	<button
		className={classNames(
			styles.button,
			{
				[styles.raised]: raised && variant !== 'text',
				[styles.filled]: variant === 'filled',
				[styles.outlined]: variant === 'outlined',
				[styles.text]: variant === 'text',
			},
			{
				[styles.primary]: type === 'primary',
				[styles.secondary]: type === 'secondary',
				[styles.danger]: type === 'danger',
				[styles.ghost]: type === 'ghost',
			},
			{
				[styles.sharp]: shape === 'sharp',
				[styles.rounded]: shape === 'rounded',
				[styles.pill]: shape === 'pill',
			}
		)}>
		{children}
	</button>
);

Button.defaultProps = {
	type: 'primary',
	variant: 'filled',
	shape: 'rounded',
	raised: false,
};

export default Button;
