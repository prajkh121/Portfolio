const Skills = () => {
  return (
    <div
      className="skills-section"
      style={{
        minHeight: "80vh",
        padding: "60px 20px",
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
        color: "#1a1a1a",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
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
            cursor: "default",
            userSelect: "none",
          }}
        >
          My Skills
        </h2>

        <div className="row gy-4">
          {[
            {
              title: "Frontend & Core Web",
              skills: [
                "HTML5, CSS3, JavaScript",
                "React.js (Hooks, Functional Components)",
                "Redux (State Management)",
                "Responsive Design (Bootstrap, Material-UI)",
                "Git & GitHub (Version Control)",
              ],
            },
            {
              title: "Backend & Tools",
              skills: [
                "MongoDB & SQL",
                "Supabase (Beginner)",
                "Node.js & Express.js (Beginner)",
                "Version Control (Git & GitHub)",
                "API Integration & JSON",
              ],
            },
          ].map(({ title, skills }, idx) => (
            <div className="col-md-6" key={idx}>
              <div
                className="skill-box"
                style={{
                  borderRadius: "15px",
                  padding: "30px",
                  backgroundColor: "#fff",
                  boxShadow:
                    "0 8px 25px rgba(118, 75, 162, 0.15), 0 6px 15px rgba(118, 75, 162, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "100%",
                  cursor: "default",
                  userSelect: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(118, 75, 162, 0.3), 0 10px 30px rgba(118, 75, 162, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(118, 75, 162, 0.15), 0 6px 15px rgba(118, 75, 162, 0.1)";
                }}
              >
                <h4
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    color: "#764ba2",
                    marginBottom: "20px",
                    borderBottom: "3px solid #764ba2",
                    paddingBottom: "10px",
                    letterSpacing: "1px",
                  }}
                >
                  {title}
                </h4>
                <ul
                  style={{
                    fontSize: "17px",
                    color: "#1a1a1a",
                    lineHeight: "2.2",
                    listStyleType: "disc",
                    paddingLeft: "25px",
                    userSelect: "text",
                  }}
                >
                  {skills.map((skill, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "8px",
                        fontWeight: "500",
                        transition: "color 0.3s ease",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#764ba2";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#1a1a1a";
                      }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
