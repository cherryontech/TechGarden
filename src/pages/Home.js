import homeDeskFlowers from "../assets/home-desk-flowers.png";

function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-5 lg:mt-0 pt-20 lg:pt-14 lg:px-5">
      <div className="flex basis-1/3 flex-col p-7 lg:ps-5">
        <h1 className="text-3xl text-midnight-moss font-bold">
          Learn and Grow Into Your Next Tech Role
        </h1>
        <p className="text-xl text-midnight-moss leading-normal py-4">
          TechGarden empowers you to make informed decisions in the tech
          industry with our knowledge-driven insights. Utilize our tools to
          craft a strategic plan for your next steps, guiding your path to
          success.
        </p>
        <div className="flex justify-center">
          <button className="rounded-md border border-midnight-moss shadow-md text-lg font-semibold text-midnight-moss bg-tropical-cyan justify-center p-4">
            Discover Tech Roles
          </button>
        </div>
      </div>
      <div className="flex justify-end basis-2/3">
        <img
          src={homeDeskFlowers}
          alt="desk with a laptop and multiple plants on top"
          className="w-full lg:w-11/12"
        />
      </div>
    </div>
  );
}

export default Home;
