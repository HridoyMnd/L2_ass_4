import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
           <footer className="bg-gray-800 text-white mt-10">
  <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
    {/* Library Info */}
    <div>
      <h2 className="text-xl font-bold mb-2">BOIGHOR</h2>
      <p className="text-sm text-gray-300">
        Your digital solution for managing and borrowing books easily and efficiently.
      </p>
    </div>

    {/* Navigation Links */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-1 text-gray-300 text-sm">
          <div className="flex flex-col text-gray-200">
            <NavLink to="/" className="hover:text-blue-400 duration-200">
              Home
            </NavLink>
            <NavLink
              to="/all_books"
              className="hover:text-blue-400 duration-200"
            >
              All Books
            </NavLink>
            <NavLink
              to="/add_book"
              className="hover:text-blue-400 duration-200"
            >
              Add Book
            </NavLink>
            <NavLink
              className="hover:text-blue-400 duration-200block "
              to="/borrow_summary"
            >
              Borrow Summary
            </NavLink>
          </div>

      </ul>
    </div>

    {/* Social & Contact */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Connect with us</h3>
      <ul className="space-y-1 text-gray-300 text-sm">
        <li>Email: smartlibrary@example.com</li>
        <li>Phone: +880 1234 567890</li>
        <li className="flex space-x-3 mt-2">
          {/* Optional Social Icons */}
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="bg-gray-900 text-center py-4 text-sm text-gray-400">
    © {new Date().getFullYear()} BOIGHOR. All rights reserved.
  </div>
</footer>

        </div>
    );
};

export default Footer;