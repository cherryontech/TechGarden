import devImage from "../assets/dev_role.png";
import prodImage from "../assets/prod_role.png";
import uxImage from "../assets/ux_role-no-border.png";

const roleData = [
  {
    title: "Web Developer",
    shortDescription:
      "The code ninjas who turn design dreams into functional, responsive reality.",
    longDescription: (
      <>
        <p>
          A web developer is a skilled professional who crafts and sustains
          websites through a comprehensive understanding of programming
          languages, databases, and frameworks. They meticulously ensure both
          functionality and performance, emphasizing client-side development to
          create responsive, interactive, and visually captivating user
          interfaces. Simultaneously, they dive into server-side development,
          constructing the intricate logic and database architecture that form
          the backbone of web applications and services.
        </p>
        <br />
        <p>
          Depending on the size and scope of a project, client and company, a
          web developer may specialize in one or more of these areas or take on
          a combination of responsibilities:
        </p>
        <ul>
          <li key="front-end developer">1. Front-end developer</li>
          <li key="back-end developer">2. Back-end Developer</li>
          <li key="full-stack developer">3. Full-stack Developer</li>
          <li key="web designer">4. Web Designer</li>
          <li key="dev-ops engineer">5. Dev-ops Engineer</li>
          <li key="web accessibility specialist">
            6. Web Accessibility Specialist
          </li>
        </ul>
      </>
    ),
    shortSkills: [
      "Responsive Design",
      "Web Accessibility Standards",
      "Problem Solving and Debugging",
    ],
    skills: [
      {
        name: "Responsive design techniques",
        description:
          "Ensuring websites work well on various devices and screen sizes through responsive design. This is crucial for providing a consistent user experience across platforms",
        type: "technical",
      },
      {
        name: "Proficiency in HTML, CSS, and JavaScript",
        description:
          "Mastery of these core web technologies is essential for creating and styling web pages and adding interactivity. They form the foundation of front-end development.",
        type: "technical",
      },
      {
        name: "UI/UX design principles",
        description:
          "Applying UI/UX principles to create user-friendly and aesthetically pleasing interfaces. This enhances usability and overall user satisfaction.",
        type: "technical",
      },
      {
        name: "Version control systems (e.g., Git)",
        description:
          "Using version control systems to track changes, collaborate with team members, and manage code efficiently. This is vital for maintaining code integrity and history.",
        type: "technical",
      },
      {
        name: "Browser developer tools",
        description:
          "Utilizing browser developer tools for debugging and optimizing web applications. These tools help in identifying and fixing issues quickly.",
        type: "technical",
      },
      {
        name: "Cross-browser compatibility testing",
        description:
          "Ensuring that web applications function correctly across different web browsers. This is important for providing a consistent experience to all users.",
        type: "technical",
      },
      {
        name: "Debugging skills",
        description:
          "Diagnosing and resolving issues that arise during development. Strong problem-solving skills are essential for maintaining functionality and performance.",
        type: "technical",
      },
      {
        name: "Communication and interpersonal",
        description:
          "Strong communication and interpersonal skills facilitate collaboration and understanding among team members and stakeholders. They are essential for conveying ideas and resolving issues.",
        type: "soft",
      },
      {
        name: "Problem-solving and decision-making",
        description:
          "Ability to identify problems and make timely decisions is crucial for project success. It involves analyzing situations and choosing the best course of action.",
        type: "soft",
      },
      {
        name: "Time management and organization",
        description:
          "Efficient time management and organizational skills ensure timely project completion and task prioritization. It helps in balancing multiple responsibilities and deadlines.",
        type: "soft",
      },
      {
        name: "Creative problem-solving",
        description:
          "Employing creativity to devise innovative solutions to design challenges. It involves thinking outside the box to enhance user experience.",
        type: "soft",
      },
      {
        name: "Attention to detail",
        description:
          "Ensuring precision in coding and design to avoid errors and ensure a polished end product. This is important for quality assurance.",
        type: "soft",
      },
      {
        name: "Presentation skills",
        description:
          "Effectively presenting design ideas and concepts to stakeholders and clients. It involves clear and persuasive communication.",
        type: "soft",
      },
      {
        name: "Collaboration with other team members",
        description:
          "Working collaboratively with various team members to create cohesive and functional web applications. Effective communication and teamwork are key.",
        type: "soft",
      },
      {
        name: "Continuous learning and adaptation to new technologies",
        description:
          "Staying updated with the latest technologies and industry trends. This ensures the use of modern tools and practices in development.",
        type: "soft",
      },
    ],
    totalSkills: 15,
    url: "../../web-developer",
    image: devImage,
  },
  {
    title: "Product Manager",
    shortDescription:
      "The visionaries who steer the product ship, balancing user desires and business ambitions.",
    longDescription: (
      <>
        <p>
          Product Managers, often referred to as Visionaries, play a crucial
          role in shepherding a product from its initial conception to its final
          execution. They coordinate teams, schedules, and resources, ensuring
          that projects progress smoothly and are completed within designated
          timeframes and budgets. With a keen focus on both user needs and
          overarching business objectives, they drive the development process
          from concept to launch, ensuring that the end result aligns with the
          envisioned goals.
        </p>
      </>
    ),
    shortSkills: ["Agile Methodologies", "Project Management", "Leadership"],
    skills: [
      {
        name: "Market research and analysis",
        description:
          "Conducting market research informs product strategy by identifying market needs and trends. It supports the development of competitive and relevant products.",
        type: "technical",
      },
      {
        name: "User feedback gathering techniques",
        description:
          "Employing techniques like surveys or user interviews collects valuable insights into user needs and experiences. This feedback is critical for product improvement and customer satisfaction.",
        type: "technical",
      },
      {
        name: "Product analytics tools (e.g., Google Analytics)",
        description:
          "Utilizing analytics tools such as Google Analytics helps in understanding user behavior and product performance. This helps with data-driven insights to improve product features.",
        type: "technical",
      },
      {
        name: "Product roadmap development",
        description:
          "Creating a product roadmap requires an understanding of design and development timelines. This ensures realistic planning and alignment with overall business goals.",
        type: "technical",
      },
      {
        name: "A/B testing methodologies",
        description:
          "Implementing A/B testing allows for the comparison of different versions of a product to determine the most effective one. It supports data-driven decision-making and product optimization.",
        type: "technical",
      },
      {
        name: "Knowledge of project management frameworks (e.g., Agile or Scrum methodologies)",
        description:
          "Proficiency with communication platforms ensures seamless team interaction and information flow. It enhances remote and cross-functional team collaboration. Understanding Agile or Scrum ensures iterative development and quick adaptation to changes. It fosters a collaborative environment and continuous improvement.",
        type: "technical",
      },
      {
        name: "Leadership and team management",
        description:
          "Effective leadership and team management motivate and guide teams towards achieving project goals. It involves clear communication, delegation, and conflict resolution.",
        type: "soft",
      },
      {
        name: "Communication and interpersonal",
        description:
          "Strong communication and interpersonal skills facilitate collaboration and understanding among team members and stakeholders. They are essential for conveying ideas and resolving issues.",
        type: "soft",
      },
      {
        name: "Problem-solving and decision-making",
        description:
          "Ability to identify problems and make timely decisions is crucial for project success. It involves analyzing situations and choosing the best course of action.",
        type: "soft",
      },
      {
        name: "Time management and organization",
        description:
          "Efficient time management and organizational skills ensure timely project completion and task prioritization. It helps in balancing multiple responsibilities and deadlines.",
        type: "soft",
      },
      {
        name: "Stakeholder management",
        description:
          "Managing relationships with stakeholders involves understanding their needs and expectations. It ensures their alignment with project goals and secures their support.",
        type: "soft",
      },
      {
        name: "Customer empathy",
        description:
          "DescriDemonstrating customer empathy involves understanding and addressing customer needs and pain points. It ensures the product meets user expectations and delivers value.ption",
        type: "soft",
      },
      {
        name: "Empathy for users",
        description:
          "Having a deep understanding and empathy for user needs and pain points. This drives the creation of user-centered designs.",
        type: "soft",
      },
      {
        name: "Creative problem-solving",
        description:
          "Employing creativity to devise innovative solutions to design challenges. It involves thinking outside the box to enhance user experience.",
        type: "soft",
      },
      {
        name: "Attention to detail",
        description:
          "Ensuring precision in coding and design to avoid errors and ensure a polished end product. This is important for quality assurance.",
        type: "soft",
      },
      {
        name: "Presentation skills",
        description:
          "Effectively presenting design ideas and concepts to stakeholders and clients. It involves clear and persuasive communication.",
        type: "soft",
      },
      {
        name: "Collaboration with other team members",
        description:
          "Working collaboratively with various team members to create cohesive and functional web applications. Effective communication and teamwork are key.",
        type: "soft",
      },
    ],
    totalSkills: 17,
    url: "../../product-manager",
    image: prodImage,
  },
  {
    title: "UX Designer",
    shortDescription:
      "The creative wizards who make sure using an app feels as good as it looks.",
    longDescription: (
      <>
        <p>
          A UX/UI Designer crafts user experiences for digital products,
          ensuring they are usable, accessible, and visually appealing. They
          conduct research to comprehend user behaviors and needs, shaping
          product design accordingly. With a keen eye for visual aesthetics,
          they create interfaces that are intuitive and align with brand
          guidelines, fostering a seamless and engaging user experience.{" "}
        </p>
        <br />
        <p>
          Within the UI/UX Designer role, several specific roles and
          responsibilities are typically encompassed:
        </p>
        <ul>
          <li key="ux researcher">1. UX Researcher</li>
          <li key="information architect">2. Information Architect</li>
          <li key="interaction designer">3. Interaction Designer</li>
          <li key="visual designer">4. Visual Designer</li>
          <li key="ux writer">5. UX Writer</li>
          <li key="ui designer">6. UI Designer</li>
          <li key="product strategist">7. Product Strategist</li>
        </ul>
      </>
    ),
    shortSkills: ["User Research", "Wireframes", "Feedback and Iteration"],
    skills: [
      {
        name: "Market research and analysis",
        description:
          "Conducting market research informs product strategy by identifying market needs and trends. It supports the development of competitive and relevant products.",
        type: "technical",
      },
      {
        name: "User feedback gathering techniques",
        description:
          "Employing techniques like surveys or user interviews collects valuable insights into user needs and experiences. This feedback is critical for product improvement and customer satisfaction.",
        type: "technical",
      },
      {
        name: "Product roadmap development",
        description:
          "Creating a product roadmap requires an understanding of design and development timelines. This ensures realistic planning and alignment with overall business goals.",
        type: "technical",
      },
      {
        name: "A/B testing methodologies",
        description:
          "Implementing A/B testing allows for the comparison of different versions of a product to determine the most effective one. It supports data-driven decision-making and product optimization.",
        type: "technical",
      },
      {
        name: "Responsive design techniques",
        description:
          "Ensuring websites work well on various devices and screen sizes through responsive design. This is crucial for providing a consistent user experience across platforms.",
        type: "technical",
      },
      {
        name: "UI/UX design principles",
        description:
          "Applying UI/UX principles to create user-friendly and aesthetically pleasing interfaces. This enhances usability and overall user satisfaction.",
        type: "technical",
      },
      {
        name: "Proficiency in graphic design concepts",
        description:
          "Knowledge of graphic design concepts aids in creating visually compelling elements and assets. It helps work on overall aesthetic of the product.",
        type: "technical",
      },
      {
        name: "UI design patterns and best practices",
        description:
          "Applying established UI design patterns and best practices to create consistent and intuitive interfaces. It helps in ensuring a familiar user experience.",
        type: "technical",
      },
      {
        name: "Design thinking",
        description:
          "Design thinking is a practical and creative way to solve problems by considering users' thoughts, needs, and behaviors. It encourages collaboration and innovation by exploring multiple solutions to a problem, rather than just fixing it.",
        type: "technical",
      },
      {
        name: "Communication and interpersonal",
        description:
          "Strong communication and interpersonal skills facilitate collaboration and understanding among team members and stakeholders. They are essential for conveying ideas and resolving issues.",
        type: "soft",
      },
      {
        name: "Problem-solving and decision-making",
        description:
          "Ability to identify problems and make timely decisions is crucial for project success. It involves analyzing situations and choosing the best course of action.",
        type: "soft",
      },
      {
        name: "Time management and organization",
        description:
          "Efficient time management and organizational skills ensure timely project completion and task prioritization. It helps in balancing multiple responsibilities and deadlines.",
        type: "soft",
      },
      {
        name: "Customer empathy",
        description:
          "Demonstrating customer empathy involves understanding and addressing customer needs and pain points. It ensures the product meets user expectations and delivers value.",
        type: "soft",
      },
      {
        name: "Empathy for users",
        description:
          "Having a deep understanding and empathy for user needs and pain points. This drives the creation of user-centered designs.",
        type: "soft",
      },
      {
        name: "Creative problem-solving",
        description:
          "Employing creativity to devise innovative solutions to design challenges. It involves thinking outside the box to enhance user experience.",
        type: "soft",
      },
      {
        name: "Attention to detail",
        description:
          "Ensuring precision in coding and design to avoid errors and ensure a polished end product. This is important for quality assurance.",
        type: "soft",
      },
      {
        name: "Presentation skills",
        description:
          "Effectively presenting design ideas and concepts to stakeholders and clients. It involves clear and persuasive communication.",
        type: "soft",
      },
      {
        name: "Collaboration with other team members",
        description:
          "Working collaboratively with various team members to create cohesive and functional web applications. Effective communication and teamwork are key.",
        type: "soft",
      },
    ],
    totalSkills: 18,
    url: "../../ux-designer",
    image: uxImage,
  },
];

export default roleData;
