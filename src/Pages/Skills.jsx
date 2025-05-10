const Skills = () => {
  return (
    <div
      className="skills-section"
      style={{
        minHeight: "80vh",
        padding: "50px 20px",
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-5"
          style={{
            fontWeight: "700",
            fontSize: "38px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#222",
          }}
        >
          My Skills
        </h2>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div
              className="skill-box"
              style={{
                borderRadius: "15px",
                padding: "30px",

                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 0, 0, 0.05)";
              }}
            >
              <h4
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  color: "#1a1a1a",
                  marginBottom: "20px",
                  borderBottom: "2px solid #ccc",
                  paddingBottom: "10px",
                }}
              >
                Frontend & Core Web
              </h4>
              <ul
                style={{
                  fontSize: "17px",
                  color: "#333",
                  lineHeight: "2",
                  listStyleType: "square",
                  paddingLeft: "20px",
                }}
              >
                <li>HTML5, CSS3, JavaScript</li>
                <li>React.js (Hooks, Functional Components)</li>
                <li>Redux (State Management)</li>
                <li>Responsive Design (Bootstrap, Material-UI)</li>
                <li>Git & GitHub (Version Control)</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div
              className="skill-box"
              style={{
                borderRadius: "15px",
                padding: "30px",

                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 0, 0, 0.05)";
              }}
            >
              <h4
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  color: "#1a1a1a",
                  marginBottom: "20px",
                  borderBottom: "2px solid #ccc",
                  paddingBottom: "10px",
                }}
              >
                Backend & Tools
              </h4>
              <ul
                style={{
                  fontSize: "17px",
                  color: "#333",
                  lineHeight: "2",
                  listStyleType: "square",
                  paddingLeft: "20px",
                }}
              >
                <li>MongoDB & SQL</li>
                <li>Supabase (Beginner)</li>
                <li>Node.js & Express.js (Beginner)</li>
                <li>Version Control (Git & GitHub)</li>
                <li>API Integration & JSON</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
