const Experience = () => {
  const experienceData = [
    {
      company: "HARLogic Innovations Pvt Ltd",
      post: "Software Developer Engineer Intern ",
      year: "July 2024 - December 2024",
      description: [
        "Designed and developed the frontend interface for HARVISION – AI-Driven Surveillance System using React.js.",
        "Integrated React frontend with Flask APIs, ensuring seamless data exchange and improving system efficiency.",
        "Trained a facial recognition model using Computer Vision and Deep Learning techniques with the HOG Model, achieving a 90% accuracy rate on a test dataset.",
      ],
    },
    {
      company: "AnkHub Technology Pvt. Ltd.",
      post: "UI Developer Intern",
      year: "July 2023 - October 2023",
      description: [
        "Developed responsive user interfaces using HTML, CSS, Bootstrap and JavaScript.",
        "Optimized frontend performance, reducing load time by 25%.",
        "Contributed to UI improvements based on customer feedback.",
      ],
    },
  ];

  return (
    <div
      className="Experience-section"
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
          Experience
        </h2>

        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 12px 30px rgba(118, 75, 162, 0.15)",
            transition: "all 0.3s ease-in-out",
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
            Professional Timeline
          </h4>

          <div
            style={{
              position: "relative",
              paddingLeft: "20px",
              borderLeft: "3px solid #764ba2",
            }}
          >
            {experienceData.map(({ company, post, year, description }, idx) => (
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
                  {company} -{" "}
                  <span style={{ fontWeight: "400", color: "#555" }}>
                    {year}
                  </span>
                </h5>
                <p
                  style={{
                    fontStyle: "italic",
                    marginBottom: "10px",
                    color: "#764ba2",
                    fontWeight: "500",
                  }}
                >
                  {post}
                </p>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    color: "#555",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  {description.map((point, i) => (
                    <li key={i} style={{ marginBottom: "6px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
