import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" top-0 left-0 right-0 z-10 flex justify-between items-center md:py-2 bg-oasis-blue px-4 md:px-20 relative">
      <Link
        to="/"
        className="text-xl md:text-3xl font-semibold hover:text-gray-600 ml-[-4rem] mt-1"
      >
        Tech Garden
      </Link>

      <div className="flex-grow flex justify-start md:space-x-3 items-center ml-11 mt-1">
        {[
          ["Discover Tech Roles", "/tech-roles"],
          ["Skill Evaluation", "/skill-eval"],
          ["Knowledge Hub", "/knowledge-hub"],
        ].map(([title, url], index) => (
          <Link
            key={index}
            to={url}
            className="rounded-lg px-1 py-4 text-14 md:text-18 md:px-3 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </Link>
        ))}
      </div>

      <div className="absolute top-4 right-5 flex items-center space-x-2">
        <button type="button" className="bg-white border border-gray-300 focus:outline-none font-small rounded-lg px-5 py-2 mr-1 dark:bg-oasis-blue dark:text-grey dark:border-gray-600">Log in</button>
        <button type="button" className="bg-white border border-gray-300 focus:outline-none font-small rounded-lg px-4 py-2 dark:bg-gray-50 dark:text-grey dark:border-gray-600">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
