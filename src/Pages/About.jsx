const About = () => {
  const educationData = [
    {
      year: "2019",
      degree: "10th Grade",
      school: "Shri UmiyaShankar Narayanji High School, Nagpur",
      percentage: "76.20%",
    },
    {
      year: "2021",
      degree: "12th Grade (Science)",
      school: "Shri VMV College, Nagpur",
      percentage: "85.33%",
    },
    {
      year: "2021-2025",
      degree: "Bachelor of Technology in Artificial Intelligence",
      school: "GH Raisoni College of Engineering and Management, Nagpur",
      percentage: "65.5% or 7.3CGPA",
    },
  ];

  return (
    <div
      className="About-section"
      style={{
        minHeight: "80vh",
        padding: "60px 20px",
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
        color: "#1a1a1a",
        fontFamily: "'Poppins', sans-serif",
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
          About Me
        </h2>

        <div className="row gy-4">
          {[
            {
              title: "Who am I?",
              content: (
                <>
                  <p>
                    I'm <strong>Prajwal Khandre</strong>, a passionate{" "}
                    <strong>Frontend Developer</strong> dedicated to creating
                    polished, responsive, and efficient web interfaces. I focus
                    on blending aesthetics with functionality to craft
                    meaningful digital experiences.
                  </p>
                  <p>
                    My commitment to continuous learning and adaptability helps
                    me thrive in dynamic tech environments. I'm driven by
                    problem-solving, innovation, and building solutions that
                    leave a lasting impact.
                  </p>
                </>
              ),
              fontStyle: "normal",
            },
            {
              title: "Mission & Goal",
              content: (
                <>
                  <p style={{ fontStyle: "italic" }}>
                    <span style={{ fontWeight: "600", fontStyle: "normal" }}>
                      Mission:
                    </span>{" "}
                    To innovate and evolve as a developer by building practical,
                    elegant solutions that empower users and drive progress.
                  </p>
                  <p style={{ fontStyle: "italic" }}>
                    <span style={{ fontWeight: "600", fontStyle: "normal" }}>
                      Goal:
                    </span>{" "}
                    To contribute to impactful open-source projects, collaborate
                    with forward-thinking teams, and deliver accessible,
                    scalable web applications with clean and efficient
                    codebases.
                  </p>
                </>
              ),
              fontStyle: "italic",
            },
          ].map(({ title, content, fontStyle }, index) => (
            <div key={index} className="col-md-4">
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  padding: "30px",
                  boxShadow: "0 12px 30px rgba(118, 75, 162, 0.15)",
                  transition: "all 0.3s ease-in-out",
                  height: "100%",
                  fontStyle,
                  color: "#333",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(118, 75, 162, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(118, 75, 162, 0.15)";
                }}
              >
                <h4
                  style={{
                    fontWeight: "700",
                    marginBottom: "20px",
                    fontSize: "24px",
                    borderBottom: "3px solid #764ba2",
                    paddingBottom: "12px",
                    color: "#764ba2",
                    userSelect: "none",
                  }}
                >
                  {title}
                </h4>
                {content}
              </div>
            </div>
          ))}

          <div className="col-md-4">
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 12px 30px rgba(118, 75, 162, 0.15)",
                transition: "all 0.3s ease-in-out",
                height: "100%",
                color: "#333",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 18px 40px rgba(118, 75, 162, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(118, 75, 162, 0.15)";
              }}
            >
              <h4
                style={{
                  fontWeight: "700",
                  marginBottom: "20px",
                  fontSize: "24px",
                  borderBottom: "3px solid #764ba2",
                  paddingBottom: "12px",
                  color: "#764ba2",
                  userSelect: "none",
                }}
              >
                Education Timeline
              </h4>

              <div
                style={{
                  position: "relative",
                  paddingLeft: "20px",
                  borderLeft: "3px solid #764ba2",
                }}
              >
                {educationData.map(
                  ({ year, degree, school, percentage }, idx) => (
                    <div
                      key={idx}
                      style={{
                        marginBottom: "30px",
                        position: "relative",
                        paddingLeft: "20px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: "-12px",
                          top: "5px",
                          width: "20px",
                          height: "20px",
                          backgroundColor: "#764ba2",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <h5
                        style={{
                          margin: "0 0 5px 0",
                          color: "#1a1a1a",
                          fontWeight: "600",
                          fontSize: "18px",
                        }}
                      >
                        {degree} -{" "}
                        <span style={{ fontWeight: "400", color: "#555" }}>
                          {year}
                        </span>
                      </h5>
                      <p
                        style={{
                          margin: "0 0 2px 0",
                          color: "#333",
                          fontSize: "15px",
                        }}
                      >
                        {school}
                      </p>
                      <p
                        style={{
                          margin: "0",
                          color: "#666",
                          fontSize: "14px",
                          fontStyle: "italic",
                        }}
                      >
                        Percentage: {percentage}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
