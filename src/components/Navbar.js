import { Link } from "react-router-dom";

function Navbar() {

  // temp color of bg-teal being used until pull request approved
  return (
      <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center align-middle px-3 md:py-4 md:px-20 bg-oasis-blue">
        <div>
          <Link
            to="/"
            className="text-xl md:text-2xl font-semibold hover:text-gray-600"
          >
            Logo
          </Link>
        </div>
        <div className="flex md:space-x-4 items-center">
          {[
            ["Discover Tech Roles", "/tech-roles"],
            ["Skill Evaluation", "/skill-eval"],
            ["Knowledge Hub", "/knowledge-hub"],
          ].map(([title, url, index]) => (
            <Link
              key={index}
              to={url}
              className="rounded-lg px-1 py-4 text-xs md:text-lg md:px-3 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
            >
              {title}
            </Link>
          ))}
        </div>
      </nav>
  );
}

export default Navbar;
