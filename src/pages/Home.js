import homeDeskFlowers from "../assets/home-desk-flowers.png";

function Home() {
  return (
    <div
      role="main"
      className="flex flex-col lg:flex-row justify-center items-center mt-5 lg:mt-0 pt-20 lg:pt-5 lg:px-5"
    >
      <div className="flex md:basis-2/3 lg:basis-5/12 xl:basis-2/5 2xl:basis-1/3 flex-col p-5 lg:pt-14 lg:ps-5 xl:p-0 ">
        <h1 className="text-3xl xl:text-4xl text-midnight-moss text-center lg:text-start font-bold md:font-extrabold">
          Learn and Grow
        </h1>
        <h1 className="text-3xl xl:text-4xl text-midnight-moss text-center lg:text-start font-bold md:font-extrabold">
          Into Your Next Tech Role
        </h1>
        <p className="text-base lg:text-medium xl:text-xl text-midnight-moss font-medium leading-normal py-3 md:px-10 lg:px-0 pb-5">
          TechGarden empowers you to thrive in the dynamic tech industry by
          making informed decisions. Discover diverse tech roles, unlock your
          transferable skills with our assessment, and tap into a treasure trove
          of resources to fuel your learning journey. Craft a strategic plan
          with our tools, guiding your path to success with confidence.
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4 text-center">
          <a
            href="/tech-roles"
            className="rounded-md border border-light-cyan hover:bg-darker-gray shadow-md text-sm xl:text-base font-semibold text-midnight-moss bg-light-gray px-1 p-3.5 w-4/6 md:w-2/6 lg:w-4/6	"
          >
            Discover Career Options
          </a>
          <a
            href="/skill-evaluation"
            className="rounded-md border border-darker-cyan hover:bg-oasis-blue shadow-md text-sm xl:text-base font-semibold text-midnight-moss bg-tropical-cyan px-1 p-3.5 w-4/6 md:w-2/6 lg:w-4/6"
          >
            Find My Skill Match
          </a>
        </div>
      </div>
      <div className="flex justify-end lg:basis-7/12 lg:basis-3/5 2xl:basis-2/3">
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
