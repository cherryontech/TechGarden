import techRolesBG from "../assets/tech-roles-bg.png";
import image from "../assets/Image.png";

function TechRoles() {
  return (
    <div className="relative w-full h-screen">
  <img
    src={techRolesBG}
    alt="Multiple sets of flowers"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div className="relative flex flex-col p-4 text-gray-700 bg-cream shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-clip-border w-80  ">
      <div className="relative h-full overflow-hidden text-cream bg-blue-gray-500 shadow-blue-gray-500/40 pt-3 px-3">
        <img
          src={image}
          alt="card-image"
        />
        
      </div>

      <div className=" px-2">
      <p className="text-xl font-bold text-black pt-3 ">
        Developer
      </p>
      <p className="text-sm text-black pt-2 pb-3">
        Short position description Short position description Short position description 
      </p>
      <div className="flex mt-1">
      <p className=" text-xs text-black bg-light-orange rounded-full px-2 py-1 inline-block">
        Skill 
      </p>
      <p className="px-1"></p>
      
      <p className=" text-xs text-black bg-light-orange rounded-full px-2 py-1 inline-block">
        Skill 
      </p>
      <p className="px-1"></p>
      
      <p className=" text-xs text-black bg-light-orange rounded-full px-2 py-1 inline-block">
        Skill 
      </p>
      </div>
      <p className="text-sm text-custom-green text-right pt-6">
        Learn More 
      </p>
      
      </div>

    </div>
  </div>
</div>

  );
}

export default TechRoles;
