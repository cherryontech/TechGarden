import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  // hide regular footer on homepage only with defined path array
  const hideFooterPaths = ["/"];

  // check if current path is in the array of paths to hide the footer
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  // if current path is in the array, don't render the footer
  if (shouldHideFooter) {
    return null;
  }

  return (
    <footer className="flex justify-between items-center font-sans text-gray-moss px-5">
      <div>
        <p className="text-xs">Copyright 2024 Tech Garden</p>
      </div>
      <div className="flex space-x-4">
        <p className="text-xs">Privacy Policy</p>
        <p className="text-xs">Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
