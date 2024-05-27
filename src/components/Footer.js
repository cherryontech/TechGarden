import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Footer() {
  const techRoles = [
    { name: "Developer", path: "/developer" },
    { name: "Product Manager", path: "/product-manager" },
    { name: "UX Designer", path: "/ux-designer" },
  ];
  const skillsResources = ["Code", "Design", "Interpersonal", "Managerial"];
  const socialIcons = [
    { icon: "mdi:github", color: "#357F78" },
    { icon: "ri:notion-fill", color: "#357F78" },
    { icon: "mdi:linkedin", color: "#357F78" },
  ];

  return (
    <footer className="px-4 md:px-24 py-10 bg-white text-gray-moss font-sans">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start py-5">
        <div className="w-full md:w-44 lg:w-72 order-1 md:order-1">
          <p className="text-xl text-black font-bold pb-5">TechGarden</p>
          <p className="text-sm pb-5 md:pb-0">
            TechGarden is a product of the Mars Mavericks tech squad of{" "}
            <a
              href="https://cherryon.tech/"
              className="text-darker-cyan font-medium"
            >
              Cherry on Tech
            </a>
            .
          </p>
          <div className="flex md:hidden space-x-4">
            {socialIcons.map((social, index) => (
              <Icon
                key={index}
                icon={social.icon}
                width="24"
                height="24"
                style={{ color: social.color }}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between md:space-x-14 lg:space-x-24 order-3 md:order-2 mt-5 md:mt-0">
          <div>
            <p className="text-sm text-black font-semibold pb-2">Tech Roles</p>
            <ul>
              {techRoles.map((role) => (
                <li
                  key={role.name}
                  className="text-sm text-darker-cyan font-medium py-1"
                >
                  <Link to={role.path}>{role.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pe-16 md:pe-0">
            <p className="text-sm text-black font-semibold pb-2">
              Skills Resources
            </p>
            <ul>
              {skillsResources.map((resource) => (
                <li
                  key={resource}
                  className="text-sm text-darker-cyan font-medium py-1"
                >
                  <Link>{resource}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between md:items-center border-t border-light-orange md:py-5">
        <p className="text-sm order-2 md:order-1 mt-5 md:mt-0">
          © 2024 TechGarden All rights reserved.
        </p>
        <div className="flex space-x-4 order-1 md:order-2 hidden md:flex">
          {socialIcons.map((social, index) => (
            <Icon
              key={index}
              icon={social.icon}
              width="24"
              height="24"
              style={{ color: social.color }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
