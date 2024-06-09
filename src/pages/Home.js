import homeDeskFlowers from "../assets/home-desk-flowers.png";

function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-5 lg:mt-0 pt-20 lg:pt-5 lg:px-5 ">
      <div className="flex basis-1/3 flex-col p-5 lg:p-0 lg:ps-5">
        <h1 className="text-3xl md:text-4xl text-midnight-moss text-center lg:text-start font-bold md:font-extrabold">
          Learn and Grow
        </h1>
        <h1 className="text-3xl md:text-4xl text-midnight-moss text-center lg:text-start font-bold md:font-extrabold">
          Into Your Next Tech Role
        </h1>
        <p className="text-base md:text-2xl md:text-xl text-midnight-moss font-medium leading-normal py-4">
          TechGarden empowers you to make informed decisions in the tech
          industry with our knowledge-driven insights. Utilize our tools to
          craft a strategic plan for your next steps, guiding your path to
          success.
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4 text-center">
          <a
            href="/tech-roles"
            className="rounded-md border border-light-cyan hover:bg-darker-gray shadow-md text-base font-semibold text-midnight-moss bg-light-gray p-3.5 w-4/6 md:w-2/6 lg:w-4/6	"
          >
            Discover Tech Roles
          </a>
          <a
            href="/skill-evaluation"
            className="rounded-md border border-darker-cyan hover:bg-oasis-blue shadow-md text-base font-semibold text-midnight-moss bg-tropical-cyan p-3.5 w-4/6 md:w-2/6 lg:w-4/6"
          >
            Take Skill Evaluation
          </a>
        </div>
      </div>
      <div className="flex justify-end basis-2/3">
        <img
          src={homeDeskFlowers}
          alt="desk with a laptop and multiple plants on top"
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Home;
