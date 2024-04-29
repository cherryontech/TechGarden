import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex sm:justify-end space-x-4">
        {[
          ["Home", "/"],
          ["Job Descriptions", "/job-descriptions"],
          ["Assessments", "/assessments"],
          ["Resources", "/resources"],
        ].map(([title, url, index]) => (
          <Link
            key={index}
            to={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
