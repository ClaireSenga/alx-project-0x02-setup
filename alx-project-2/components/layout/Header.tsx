import { FC } from 'react';
import { HeaderProps } from '../../interfaces';

const Header: FC<HeaderProps> = ({ title = 'SoloForge Project' }) => (
  <header className="bg-blue-600 text-white p-4">
    <h1 className="text-2xl font-bold">{title}</h1>
  </header>
);

export default Header;
