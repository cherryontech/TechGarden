import './Developer.css';
import uxImage from "../../assets/dev_role.png";


function Developer() {
  return (
    <div className="container">
    <div className="containerTwo">
      <div className="roles-image  border-2 border-light-orange">
        <img src={uxImage} alt="UX Role" className="role-image" />
      </div>
    </div>


    <div className="containerOne">
      <div className="font-bold roles-title text-md  ">Web Developer</div>
      <div className="text-xs roles-sum">
      A web developer is a skilled professional who crafts and sustains websites through a comprehensive understanding of programming languages, databases, and frameworks. They meticulously ensure both functionality and performance, emphasizing client-side development to create responsive, interactive, and visually captivating user interfaces. Simultaneously, they dive into server-side development, constructing the intricate logic and database architecture that form the backbone of web applications and services.
    </div>
    <div className=" text-xs roles-list mt-2">Depending on the size and scope of a project, client and company , a web developer may specialize in one or more of these areas or take on a combination of responsibilities:</div>
  
    <div className="roles-list1 text-xs">
    <div className="text-xs">1.Front-end Developer</div>
      <div className="text-xs">2.Back-end Developer</div>
      <div className="text-xs">3.FullStack Developer</div>
      <div className="text-xs">4.Web Developer</div>
      <div className="text-xs">5.Devops Engineer</div>
      <div className="text-xs">6.Web Accessibility Specialist</div>
      </div>
      </div>


      <div className="containerthree">
      <div className="skill-title text-md mr-10 mt-3 font-bold">Grow Your Technical Skills</div>
      </div>


      <div className="containerfour">
      <button className="bg-tropical-cyan text-gray-800 text-xs font-semibold py-1 px-12 border border-gray-400 rounded shadow">
          Strategic thinking skills
        </button>
        <button className="bg-tropical-cyan text-gray-800 text-xs font-semibold py-1 px-12 border border-gray-400 rounded shadow">
          Strategic thinking skills
        </button>
      </div>
      <div className="containersix">
      <button className=" bg-tropical-cyan text-gray-800 text-xs font-semibold py-1 px-12 border border-gray-400 rounded shadow">
          Strategic thinking skills
        </button>
        <button className=" bg-tropical-cyan text-gray-800 text-xs font-semibold py-1 px-12 border border-gray-400 rounded shadow">
          Strategic thinking skills
        </button>
      </div>


      <div className="containersix">
      <button className=" bg-tropical-cyan text-gray-800 text-xs font-semibold py-1 px-12 border border-gray-400 rounded shadow">
          Strategic thinking skills
        </button>
        <button className=" bg-tropical-cyan text-gray-800 text-xs font-semibold py-1 px-12 border border-gray-400 rounded shadow">
          Strategic thinking skills
        </button>
      </div>


      <div className="containerfive">
      <div className="skill-title text-md mr-10 mt-3 font-bold">Grow Your Soft Skills</div>
      </div>


      <div className="containersix">
      <button className=" bg-tropical-cyan text-gray-800 text-xs font-semibold py-1 px-12 border border-gray-400 rounded shadow">
          Strategic thinking skills
        </button>
        <button className=" bg-tropical-cyan text-gray-800 text-xs font-semibold py-1 px-12 border border-gray-400 rounded shadow">
          Strategic thinking skills
        </button>
      </div>


      <div className="containersix">
      <button className=" bg-tropical-cyan text-gray-800 text-xs font-semibold py-1 px-12 border border-gray-400 rounded shadow">
          Strategic thinking skills
        </button>
        <button className=" bg-tropical-cyan text-gray-800 text-xs font-semibold py-1 px-12 border border-gray-400 rounded shadow">
          Strategic thinking skills
        </button>
      </div>
      </div>
     
  );
}

export default Developer;
