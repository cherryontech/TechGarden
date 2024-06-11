import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Dialog,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
  DialogPanel,
} from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";

const techRoles = [
  { name: "Web Developer", path: "/web-developer" },
  { name: "Product Manager", path: "/product-manager" },
  { name: "UX Designer", path: "/ux-designer" },
];

const navLinks = [
  { name: "Skill Evaluation", path: "/skill-evaluation" },
  { name: "Knowledge Hub", path: "/knowledge-hub" },
];

const handleLinkClick = () => {
  window.scrollTo(0, 0);
};

const MenuLink = ({ name, path }) => (
  <Link
    to={path}
    className="text-sm leading-6 text-gray-600 hover:text-gray-800"
    onClick={handleLinkClick}
  >
    {name}
  </Link>
);

MenuLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

const DropdownMenu = ({ title, items }) => {
  const history = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    history("/tech-roles");
    window.scrollTo(0, 0);
  };

  return (
    <Popover
      className="relative font-sans"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <PopoverButton
          as="a"
          href="/tech-roles"
          onClick={handleClick}
          className="flex items-center gap-x-1 text-sm leading-6 text-gray-600 hover:text-gray-800"
        >
          {title}
          <ChevronDownIcon
            className="h-3.5 w-3.5 text-gray-600 hover:text-gray-800"
            aria-hidden="true"
          />
        </PopoverButton>
        <Transition
          show={isHovered}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel className="absolute z-10 mt-1 w-40 max-w-xs transform px-2 sm:px-0 lg:max-w-3xl">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-oasis-blue ring-opacity-5">
              <div className="relative">
                {items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-start rounded-lg p-2 transition duration-150 ease-in-out bg-white hover:bg-lightest-cyan"
                    onClick={handleLinkClick}
                  >
                    <div className="ml-4">
                      <p className="text-sm text-gray-600 hover:text-gray-800">
                        {item.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </PopoverPanel>
        </Transition>
      </div>
    </Popover>
  );
};

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 z-10 flex justify-between md:justify-start items-center px-3 md:px-6 bg-oasis-blue h-16 text-base font-medium font-sans"
        aria-label="Navigation Menu"
      >
        <Link
          to="/"
          onClick={handleLinkClick}
          className="text-2xl font-semibold text-gray-800 hover:text-gray-900"
        >
          TechGarden
        </Link>
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-black"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle Menu"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-gray-700" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden md:flex md:gap-x-12 md:ps-14">
          <DropdownMenu title="Discover Roles" items={techRoles} />
          {navLinks.map((link) => (
            <MenuLink key={link.name} name={link.name} path={link.path} />
          ))}
        </PopoverGroup>
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10">
          <DialogPanel className="fixed right-1 z-10 w-60 bg-white px-6 py-3 mt-14 max-w-xs transform px-2 lg:max-w-3xl rounded-lg shadow-lg ring-1 ring-oasis-blue ring-opacity-5">
            <Link
              to="/tech-roles"
              className="-mx-3 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-600 hover:text-gray-800 hover:bg-lightest-cyan"
              onClick={handleLinkClick}
            >
              Discover Roles
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-600 hover:text-gray-800 hover:bg-lightest-cyan"
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
}

export default Navbar;
