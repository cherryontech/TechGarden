import HomeFooter from "../components/HomeFooter";
import homeDeskFlowers from "../assets/home-desk-flowers.png";

function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-5 lg:mt-0 pt-20 lg:pt-5 lg:px-5 lg:relative">
      <div className="flex basis-1/3 flex-col p-5 lg:p-0 lg:ps-5">
        <h1 className="text-4xl md:text-5xl text-midnight-moss text-center lg:text-start font-bold md:font-extrabold">
          Learn and Grow
        </h1>
        <h1 className="text-2xl md:text-4xl text-center lg:text-start font-bold md:font-extrabold">
          Into Your Next Tech Role
        </h1>
        <p className="text-base md:text-2xl md:text-xl text-midnight-moss font-medium leading-normal py-4">
          TechGarden empowers you to make informed decisions in the tech
          industry with our knowledge-driven insights. Utilize our tools to
          craft a strategic plan for your next steps, guiding your path to
          success.
        </p>
        <div className="flex justify-center">
          <button className="rounded-md border border-midnight-moss shadow-md text-base lg:text-lg font-semibold text-midnight-moss bg-tropical-cyan justify-center p-2 md:p-4">
            Discover Tech Roles
          </button>
        </div>
      </div>
      <div className="flex justify-end basis-2/3">
        <img
          src={homeDeskFlowers}
          alt="desk with a laptop and multiple plants on top"
          className="w-full"
        />
      </div>
      <div className="lg:w-2/5 xl:w-2/3 lg:flex lg:justify-between lg:absolute bottom-0 lg:left-0 pt-10 lg:pt-0">
        <HomeFooter />
      </div>
    </div>
  );
}

export default Home;
