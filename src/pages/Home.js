// import homeDeskFlowers from "../assets/home-desk-flowers.jpeg";

function Home() {
  return (
    <div className="flex items-center m-5">
      <div className="md:w-2/5 px-7">
        <h1 className="text-4xl text-midnight-moss font-bold">
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
      <div className="md:w-3/5">
        {/* <img src={homeDeskFlowers} alt="desk with a laptop and multiple plants on top" /> */}
      </div>
    </div>
  );
}

export default Home;
