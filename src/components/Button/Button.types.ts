import { MouseEventHandler } from 'react';

export type ButtonType = {
  size?: 'large' | 'medium' | 'small'
  variation?: 'primary' | 'secondary' | 'ghost'
  onClick?: MouseEventHandler<HTMLButtonElement>
  rounded?: 'soft' | 'hard'
  isActive?: boolean
  isDisabled?: boolean
  className?: string
  styles?: object
}
