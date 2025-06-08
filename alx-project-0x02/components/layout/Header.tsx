import Link from 'next/link';
import { FC } from 'react';
import { HeaderProps } from '../../interfaces';

const Header: FC<HeaderProps> = ({ title = 'SoloForge' }) => (
  <header className="bg-blue-600 text-white p-4 flex gap-4">
    <h1 className="text-xl">{title}</h1>
    <nav className="flex gap-2">
      <Link href="/home"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/posts"><a>Posts</a></Link>
    </nav>
  </header>
);

export default Header;
