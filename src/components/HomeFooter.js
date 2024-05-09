// need to adjust mobile center layout

function HomeFooter() {
  return (
    <footer className="flex flex-col lg:flex-row text-center lg:justify-between font-sans text-gray-moss space-x-4 lg:space-x-0 xl:space-x-16 2xl:space-x-24 lg:px-5">
      <p className="text-xs lg:text-left">Copyright 2024 Tech Garden</p>
      <div className="flex justify-center lg:justify-end pt-5 lg:pt-0 space-x-16 lg:space-x-2 xl:space-x-5">
        <p className="text-xs lg:pl-2 xl:pl-5 2xl:pl-20">Privacy Policy</p>
        <p className="text-xs">Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default HomeFooter;
