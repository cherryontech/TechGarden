import React from 'react';
import devImage from "../assets/dev_role.png";
import prodImage from "../assets/prod_role.png";
import uxImage from "../assets/ux_role.png";

function TechRoles() {
  const cardsData = [
    {
      title: "Developer",
      description: "The code ninjas who turn design dreams into functional, responsive reality.",
      skills: ["Responsive Design", "API Integration", "Problem Solving and Debugging"],
      url: "../../developer",
      image: devImage
    },
    {
      title: "Product Manager",
      description: "The visionaries who steer the product ship, balancing user desires and business ambitions.",
      skills: ["Agile Methodologies", "Project Management", "Leadership"],
      url: "../../product-manager",
      image: prodImage
    },
    {
      title: "UX Designer",
      description: "The creative wizards who make sure using an app feels as good as it looks.",
      skills: ["User Research", "Wireframes", "Feedback and Iteration"],
      url: "../../ux-designer",
      image: uxImage
    },
  ];

  return (
    
    <div className="relative w-full h-screen flex justify-center items-center">
    
      <div className="w-full max-w-screen-xl mx-auto px-4 overflow-y-auto mt-12 p-2 " style={{ maxHeight: '80vh' }}>
        <div className="flex flex-wrap justify-center items-center gap-11">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col p-4 text-gray-700 bg-cream shadow-xl  w-full max-w-sm md:max-w-md"
              style={{ height: '506px', width: '300px',  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="relative  overflow-hidden text-cream bg-blue-gray-500 shadow-blue-gray-500/40  border-2 border-light-orange mx-auto" style={{ height: '250px', width: '250px',  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1)' }}>
            
                <img
                  src={card.image}
                  alt={`${card.title} image`}
                  className="w-full h-full  object-cover"
                />
             
              </div>
              <div className="px-2 flex flex-col flex-grow">
                <div className="flex-grow">
                  <p className="text-xl font-bold text-black pt-6 ">{card.title}</p>
                  <p className="text-sm text-black pt-2 pb-3">{card.description}</p>
                  <div className="flex flex-wrap mt-2 mb-3">
                    {card.skills.map((skill, index) => (
                      <React.Fragment key={index}>
                        <p className="text-xs text-black bg-light-orange rounded-full px-2 py-1 mt-2 inline-block">{skill}</p>
                        <p className="px-1"></p>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-tropical-cyan text-right pt-6">
                  <a href={card.url}>Learn More</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechRoles;
