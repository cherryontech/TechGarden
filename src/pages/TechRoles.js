import React from 'react';
import techRolesBG from "../assets/tech-roles-bg.png";
import image from "../assets/Image.png";


function TechRoles() {
// Define an array to hold data for each card
const cardsData = [
  {
    title: "Developer",
    description: "Short position description Short position description Short position description",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
  {
    title: "Project Manager",
    description: "Short position description Short position description Short position description",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
  {
    title: "UX Designer",
    description: "Short position description Short position description Short position description",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
  // Add more objects for additional cards if needed
];




return (
  <div className="relative w-full h-screen flex justify-center items-center">
    <img
      src={techRolesBG}
      alt="Multiple sets of flowers"
      className=" absolute inset-0 w-full h-full object-cover"
    />




    <div className="w-full max-w-screen-xl mx-auto px-4 overflow-y-auto mb-8 " style={{ maxHeight: '80vh' }}>
      <div className="flex flex-wrap justify-center items-center gap-11 ">
        {cardsData.map((card, index) => (
          <div key={index} className="relative flex flex-col p-4 text-gray-700 bg-cream shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-clip-border w-full max-w-sm md:max-w-md lg:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]">
            <div className="relative h-full overflow-hidden text-cream bg-blue-gray-500 shadow-blue-gray-500/40 pt-3 px-3">
              <img
                src={image}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </div>




            <div className="px-2 flex flex-col flex-grow ">
              <div className="flex-grow">
                <p className="text-xl font-bold text-black pt-3">{card.title}</p>
                <p className="text-sm text-black pt-2 pb-3">{card.description}</p>
                <div className="flex flex-wrap mt-2 mb-3">
                  {card.skills.map((skill, index) => (
                    <React.Fragment key={index}>
                      <p className="text-xs text-black bg-light-orange rounded-full px-2 py-1 inline-block">{skill}</p>
                      <p className="px-1"></p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <p className="text-sm text-custom-green text-right pt-6">Learn More</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}




export default TechRoles;