/// <reference types="react" />
import { ButtonPropTypes } from './types';
declare const Button: {
    ({ type, variant, children }: ButtonPropTypes): JSX.Element;
    defaultProps: {
        type: string;
        variant: string;
    };
};
export default Button;
