import { useRef } from 'react';
import logo from '/img/logo.png';
import Button from './ui/Button';
import {navLinks, type TNavLink} from '@/src/mockData/navLinks';

export default function Navbar() {
  const navRef = useRef(null);

  return (
    <div
      ref={navRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src={logo} alt="logo" className="h-16 w-16" />
            <Button
              id="navButton"
              className="hidden gap-1 bg-blue-50 hover:bg-blue-400 md:flex"
              title="products"
            />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block ">
              {navLinks.map((item:TNavLink) => (
                <a href="#" key={item.id} className="nav-hover-btn">{item.name}</a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
