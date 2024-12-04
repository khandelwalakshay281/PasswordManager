import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl"> 
          <span className='bg-green-500'> &lt;</span>
          <span>Pass</span>
          <span className='text-green-500'>OP/&gt;</span>
        </div>

        {/* GitHub Button */}
        <a
          href="https://github.com/khandelwalakshay281"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-green-600 my-5 rounded-full flex justify-between items-center ring-white ring-1 p-0"
        >
          <img
            className="invert p-1 w-10"
            src="/icons/github.png"
            alt="GitHub logo"
          />
          <span className="font-bold px-2">GitHub</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
