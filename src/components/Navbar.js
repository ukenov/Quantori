import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Modal from './Modal';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { auth, logout } = useAuth();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <nav className="bg-gray-800 h-120 flex items-center justify-between px-10">
        {/* Left-aligned items */}
        <div className="flex items-center space-x-10">
          <div className="flex-shrink-0" style={{ transform: 'scale(1.7)' }}>
            {auth ? (
              <img
                src={auth.image}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            ) : (
              <AccountCircleIcon className="text-white scale-400" />
            )}
          </div>
        </div>
        
        {/* Center items for larger screens */}
        <div className="hidden sm:flex flex-grow justify-center space-x-16">
          <Link to="/" className="text-white text-xl hover:bg-gray-700 px-4 py-2 rounded-md">Home</Link>
          <Link to="/about" className="text-white text-xl hover:bg-gray-700 px-4 py-2 rounded-md">About</Link>
          <Link to="/contact" className="text-white text-xl hover:bg-gray-700 px-4 py-2 rounded-md">Contact</Link>
        </div>
        
        {/* Right-aligned items */}
        <div className="flex items-center space-x-4 ml-auto">
          {auth ? (
            <>
              <button
                onClick={logout}
                className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md"
              >
                Logout
              </button>
              <div className="sm:hidden">
                <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
                  {isMenuOpen ? (
                    <XMarkIcon className="h-32 w-32" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-32 w-32" aria-hidden="true" />
                  )}
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={openModal}
              className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md text-nav"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 w-full">
          <Link to="/" className="text-xl hover:bg-gray-700 px-4 py-2 rounded-md" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="text-xl hover:bg-gray-700 px-4 py-2 rounded-md" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="text-xl hover:bg-gray-700 px-4 py-2 rounded-md" onClick={toggleMenu}>Contact</Link>
        </div>
      )}

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Navbar;
