import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Footer() {
  const techRoles = [
    { name: "Web Developer", path: "/web-developer" },
    { name: "Product Manager", path: "/product-manager" },
    { name: "UX Designer", path: "/ux-designer" },
  ];

  const socialIcons = [
    {
      icon: "mdi:github",
      color: "#36817A",
      url: "https://github.com/cherryontech/TechGarden",
      label: "GitHub",
    },
    {
      icon: "ri:notion-fill",
      color: "#36817A",
      url: "https://www.notion.so/cherryontech-org/CherryOnTech-4e9cbb7ab6d041de9f87506afd327979",
      label: "Notion",
    },
    {
      icon: "mdi:linkedin",
      color: "#36817A",
      url: "https://www.linkedin.com/company/cherry-on-tech/",
      label: "LinkedIn",
    },
  ];

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="px-4 md:px-24 py-10 border-t-2 border-green-blue text-gray-moss font-sans">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start py-5">
        <div className="w-full md:w-44 lg:w-72 order-1 md:order-1">
          <p className="text-xl text-black font-bold pb-5">TechGarden</p>
          <p className="text-sm pb-5 md:pb-0">
            TechGarden is a product of the Mars Mavericks tech squad of{" "}
            <a
              href="https://cherryon.tech/"
              className="text-darker-cyan hover:text-darkest-cyan font-semibold"
            >
              Cherry on Tech
            </a>
            .
          </p>
          <ul className="flex md:hidden space-x-4">
            {socialIcons.map((social, index) => (
              <li key={index}>
                <a
                  role="button"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon
                    icon={social.icon}
                    width="24"
                    height="24"
                    style={{ color: social.color }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between md:space-x-14 lg:space-x-24 order-3 md:order-2 mt-5 md:mt-0">
          <div>
            <p className="text-sm text-black font-bold pb-2">Tech Roles</p>
            <ul>
              {techRoles.map((role) => (
                <li
                  key={role.name}
                  className="text-sm text-darker-cyan hover:text-darkest-cyan font-medium py-1"
                >
                  <Link to={role.path} onClick={handleLinkClick}>
                    {role.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pe-16 md:pe-0">
            <p className="text-sm text-black font-semibold pb-2">
              Skills Resources
            </p>

            <Link
              to="/knowledge-hub"
              className="text-sm text-darker-cyan hover:text-darkest-cyan font-medium py-1"
              onClick={handleLinkClick}
            >
              Knowledge Hub
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between md:items-center border-t border-light-orange md:py-5">
        <p className="text-sm order-2 md:order-1 mt-5 md:mt-0">
          © 2024 TechGarden All rights reserved.
        </p>
        <ul className="flex space-x-4 order-1 md:order-2 hidden md:flex">
          {socialIcons.map((social, index) => (
            <li key={index}>
              <a
                role="button"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Icon
                  icon={social.icon}
                  width="24"
                  height="24"
                  style={{ color: social.color }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
