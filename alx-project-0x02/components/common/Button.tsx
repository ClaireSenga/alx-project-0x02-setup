import { FC } from 'react';
import { ButtonProps } from '../../interfaces';

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2',
  large: 'px-6 py-3 text-lg',
};

const Button: FC<ButtonProps> = ({
  size = 'medium',
  shape = 'rounded-md',
  children,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`${sizeClasses[size]} ${shape} bg-blue-500 text-white`}
  >
    {children}
  </button>
);

export default Button;
