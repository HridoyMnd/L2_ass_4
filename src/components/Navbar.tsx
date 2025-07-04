import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 drop-shadow-md">
            BOIGHOR
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={({isActive}) => `${isActive?"text-blue-500":"text-gray-700"}`}>
              Home
            </NavLink>
            <NavLink
              to="/all_books"
              className={({isActive}) => `${isActive?"text-blue-500":"text-gray-700"}`}
            >
              All Books
            </NavLink>
            <NavLink
              to="/add_book"
              className={({isActive}) => `${isActive?"text-blue-500":"text-gray-700"}`}
            >
              Add Book
            </NavLink>
            <NavLink
              className={({isActive}) => `${isActive?"text-blue-500":"text-gray-700"}`}
              to="/borrow_summary"
            >
              Borrow Summary
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </NavLink>
          <NavLink
            className="block text-gray-700 hover:text-blue-600"
            to="/all_books"
          >
            All Books
          </NavLink>
          <NavLink
            className="block text-gray-700 hover:text-blue-600"
            to="/add_book"
          >
            Add Book
          </NavLink>
          <NavLink
            className="block text-gray-700 hover:text-blue-600"
            to="/borrow_summary"
          >
            Borrow Summary
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
