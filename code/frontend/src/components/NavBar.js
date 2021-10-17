import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <header>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-onSurface mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="text-lg font-bold leading-relaxed inline-block mr-4 py-2  text-primary flex flex-wrap gap-6">
              <Link className="text-2xl" to="/">
                Faarms
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
