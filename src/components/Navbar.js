import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-3 py-3 md:px-20 bg-oasis-blue h-16">
      <div className="flex items-center">
        <Link
          to="/"
          className="fixed left-5 text-2xl font-semibold mr-3 hover:text-gray-600 whitespace-nowrap"
        >
          Tech Garden
        </Link>
      </div>
      <div className="hidden fixed md:flex md:space-x-4 items-center whitespace-nowrap justify-start top-5.5 left-48 px-3 md:px-5" >
        {[
          ["Discover Tech Roles", "/tech-roles"],
          ["Skill Evaluation", "/skill-eval"],
          ["Knowledge Hub", "/knowledge-hub"],
        ].map(([title, url], index) => (
          <Link
            key={index}
            to={url}
            className="text-sm font-small hover:text-gray-600 whitespace-nowrap"
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="hidden fixed md:flex md:flex-row items-center space-x-2 top-3 right-6 ">
        <Link to="/">
        <button
          type="button"
          className="bg-white border border-gray-300 focus:outline-none text-sm font-small rounded-lg px-4 py-2 dark:bg-oasis-blue dark:text-grey dark:border-gray-600"
          aria-label="Log in"
       >
          Log in
        </button>
        </Link>
        <Link to="/">
   
        <button
          type="button"
          className="bg-white border border-gray-300 focus:outline-none text-sm font-small rounded-lg px-3 py-2 dark:bg-gray-50 dark:text-grey dark:border-gray-600"
          aria-label="Sign in"
        >
          Sign Up
        </button>
        </Link>
      </div>

  <div className="md:hidden fixed top-6 right-6">
  <button
    type="button"
    className="block md:hidden focus:outline-none"
    onClick={() => setShowMenu(!showMenu)}
    aria-label="Toggle Menu" 
  >
    
    <span className="sr-only">Toggle Menu</span>
    <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
    <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
    <div className="w-5 h-0.5 bg-gray-600"></div>
  </button>
</div>
    </nav>
  );
}

export default Navbar;
