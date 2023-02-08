import React, { FC } from 'react';
import classnames from 'classnames';
import { ButtonType } from './Button.types';
import './Button.css';

const Button: FC<ButtonType> = ({
  label,
  className,
  btnType,
  onClick,
  size,
  rounded,
  isActive,
  styles,
  isDisabled
}) => (
  <button
    className={classnames(
      'button',
      className,
      btnType,
      {
        [`button-${size}`]: size,
        [`button-${rounded}`]: rounded,
        active: isActive,
        disabled: isDisabled
      }
    )}
    disabled={isDisabled ?? false}
    onClick={onClick}
    style={styles}
  >
    {label}
  </button>
)

export default Button;
