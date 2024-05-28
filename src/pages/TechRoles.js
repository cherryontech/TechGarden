import React from 'react';
import techRolesBG from "../assets/tech-roles-bg.png";
import image from "../assets/Image.png";

function TechRoles() {
  const cardsData = [
    {
      title: "Developer",
      description: "The code ninjas who turn design dreams into functional, responsive reality.",
      skills: ["Responsive Design", "Web Accessibility Standards", "Problem Solving and Debugging"],
      url: "../../developer"
    },
    {
      title: "Product Manager",
      description: "The visionaries who steer the product ship, balancing user desires and business ambitions.",
      skills: ["Agile Methodologies", "Project Management", "Leadership"],
      url: "../../product-manager"
    },
    {
      title: "UX Designer",
      description: "The creative wizards who make sure using an app feels as good as it looks.",
      skills: ["User Research", "Wireframes", "Feedback and Iteration"],
      url: "../../ux-designer"
    },
  ];

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <img
        src={techRolesBG}
        alt="Multiple sets of flowers"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="w-full max-w-screen-xl mx-auto px-4 overflow-y-auto mb-12" style={{ maxHeight: '80vh' }}>
        <div className="flex flex-wrap justify-center items-center gap-11">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col p-4 text-gray-700 bg-cream shadow-md bg-clip-border w-full max-w-sm md:max-w-md lg:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)]"
              style={{ height: '520px', width: '350px' }}
          // Set a fixed height for the card container
            >
              <div className="relative h-1/2 overflow-hidden text-cream bg-blue-gray-500 shadow-blue-gray-500/40  border-2 border-light-orange">
            
                <img
                  src={image}
                  alt="card-image"
                  className="w-full h-full object-cover"
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
