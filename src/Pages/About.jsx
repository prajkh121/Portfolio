const About = () => {
  return (
    <div
      className="About-section"
      style={{
        minHeight: "80vh",
        padding: "60px 20px",
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
          }}
        >
          About Me
        </h2>

        <div className="row gy-4">
          <div className="col-md-6">
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "30px",
                boxShadow: "0 10px 24px rgba(0, 0, 0, 0.06)",
                transition: "all 0.3s ease-in-out",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 24px rgba(0, 0, 0, 0.06)";
              }}
            >
              <h4
                style={{
                  fontWeight: "600",
                  marginBottom: "20px",
                  fontSize: "22px",
                  borderBottom: "2px solid #eee",
                  paddingBottom: "10px",
                }}
              >
                Who am I?
              </h4>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.7",
                  marginBottom: "15px",
                  textAlign: "justify",
                  color: "#333",
                }}
              >
                I'm <strong>Prajwal Khandre</strong>, a passionate{" "}
                <strong>Frontend Developer</strong> dedicated to creating
                polished, responsive, and efficient web interfaces. I focus on
                blending aesthetics with functionality to craft meaningful
                digital experiences.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.7",
                  textAlign: "justify",
                  color: "#333",
                }}
              >
                My commitment to continuous learning and adaptability helps me
                thrive in dynamic tech environments. I'm driven by
                problem-solving, innovation, and building solutions that leave a
                lasting impact.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "30px",
                boxShadow: "0 10px 24px rgba(0, 0, 0, 0.06)",
                transition: "all 0.3s ease-in-out",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 24px rgba(0, 0, 0, 0.06)";
              }}
            >
              <h4
                style={{
                  fontWeight: "600",
                  marginBottom: "20px",
                  fontSize: "22px",
                  borderBottom: "2px solid #eee",
                  paddingBottom: "10px",
                }}
              >
                Mission & Goal
              </h4>
              <p
                style={{
                  fontSize: "17px",
                  fontStyle: "italic",
                  lineHeight: "1.7",
                  marginBottom: "15px",
                  textAlign: "justify",
                  color: "#333",
                }}
              >
                <span style={{ fontWeight: "600", fontStyle: "normal" }}>
                  Mission:
                </span>{" "}
                To innovate and evolve as a developer by building practical,
                elegant solutions that empower users and drive progress.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  fontStyle: "italic",
                  lineHeight: "1.7",
                  textAlign: "justify",
                  color: "#333",
                }}
              >
                <span style={{ fontWeight: "600", fontStyle: "normal" }}>
                  Goal:
                </span>{" "}
                To contribute to impactful open-source projects, collaborate
                with forward-thinking teams, and deliver accessible, scalable
                web applications with clean and efficient codebases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
