const Projects = () => {
  const projects = [
    {
      name: "Swigger – Food Delivery Application",
      period: "March 2024 – May 2024",
      description: [
        "Developed a dynamic food delivery website using the MERN stack, leveraging React.js for a responsive user interface and Bootstrap for seamless styling.",
        "Implemented a robust MongoDB database to efficiently manage food items, orders, and user data, ensuring high performance and reliability.",
        "Integrated Node.js for server-side functionality, enabling real-time order processing and enhancing overall application responsiveness.",
      ],
    },
    {
      name: "GenTime - Automatic Timetable Generator",
      period: "November 2024 - January 2025",
      description: [
        "Developed a timetable generator using a Genetic Algorithm to optimize subject allocation and faculty scheduling.",
        "Designed and implemented a Flask-based backend with an SQL database to efficiently manage course schedules and constraints.",
        "Improved scheduling efficiency by 30%, ensuring fair subject distribution and conflict-free timetables.",
      ],
    },
    {
      name: "IndusFlow - Customer Relationship Manager for Industry",
      period: "July 2024 - October 2024",
      description: [
        "Developed a comprehensive CRM application using the MERN stack to manage tender details, billing processes, and shipment tracking for industrial clients.",
        "Integrated user authentication and role-based access control, ensuring secure and streamlined access to sensitive project information.",
        "Optimized database queries and front-end performance, improving application efficiency and user experience.",
      ],
    },
    {
      name: "OptiRoom - Smart Interior Planner",
      period: "Feb 2025 – April 2025",
      description: [
        "Used SUN RGB-D dataset to train deep learning models with Stable Diffusion, ControlNet, and LoRA techniques for smart interior planning.",
        "Developed a full-stack application using ReactJS for the frontend and Flask for backend API services.",
        "Ensured a responsive design for seamless use across devices and screen sizes.",
      ],
    },
  ];

  return (
    <div
      style={{
        minHeight: "95vh",
        padding: "80px 20px",
        background: "linear-gradient(145deg, #f8f9fa, #e3e7f0)",
        fontFamily: "'Montserrat', sans-serif",
        color: "#1a1a1a",
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-5"
          style={{
            fontWeight: "700",
            fontSize: "36px",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            color: "#1a1a1a",
            borderBottom: "3px solid #764ba2",
            display: "inline-block",
            paddingBottom: "8px",
            marginBottom: "50px",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "fit-content",
            transition: "color 0.3s ease",
            cursor: "default",
          }}
        >
          Projects
        </h2>

        <div
          className="row justify-content-center gy-5"
          style={{ gap: "30px" }}
        >
          {projects.map(({ name, period, description }) => (
            <div
              key={name}
              className="col-md-6 col-lg-5"
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "35px 30px",
                boxShadow:
                  "0 8px 25px rgba(118, 75, 162, 0.15), 0 6px 15px rgba(118, 75, 162, 0.1)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                cursor: "default",
                userSelect: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-15px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(118, 75, 162, 0.3), 0 10px 30px rgba(118, 75, 162, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(118, 75, 162, 0.15), 0 6px 15px rgba(118, 75, 162, 0.1)";
              }}
            >
              <h3
                style={{
                  fontWeight: "700",
                  fontSize: "26px",
                  color: "#764ba2",
                  marginBottom: "8px",
                  letterSpacing: "1px",
                }}
              >
                {name}
              </h3>
              <span
                style={{
                  display: "inline-block",
                  fontWeight: "600",
                  fontSize: "14px",
                  padding: "5px 14px",
                  borderRadius: "12px",
                  backgroundColor: "#e8eaf6",
                  color: "#764ba2",
                  marginBottom: "22px",
                  userSelect: "none",
                  letterSpacing: "0.6px",
                }}
              >
                {period}
              </span>
              <ul
                style={{
                  color: "#1a1a1a",
                  fontSize: "16px",
                  lineHeight: "1.7",
                  paddingLeft: "20px",
                }}
              >
                {description.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: "13px",
                      fontWeight: "500",
                      transition: "color 0.3s ease",
                      color: "#1a1a1a",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#764ba2";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#1a1a1a";
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
