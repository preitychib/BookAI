import React from 'react';

const NavBar = () => {
  return (
    <div className="fixed bottom-0 left-[2%] flex flex-row items-center p-4 bg-none gap-10">
      {/* Logo */}
      <div className="mb-4">
        <img src="/logogirl.ico" alt="Logo" className="h-20 w-20" />
      </div>

      {/* Navigation Buttons */}
      <nav className="flex flex-row items-center gap-10">
        <button className="text-bright-purple hover:text-purple-500">Home</button>
        <button className="text-bright-purple hover:text-purple-500">About</button>
        <button className="text-bright-purple hover:text-purple-500">Services</button>
        <button className="text-bright-purple hover:text-purple-500">Contact</button>
      </nav>
    </div>
  );
};

export default NavBar;
