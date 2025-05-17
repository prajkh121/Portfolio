import prajImage from "../assets/prajwal.jpg";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";

const Home = () => {
  return (
    <div
      className="hero-section d-flex align-items-center"
      style={{
        minHeight: "79vh",
        padding: "80px 0",
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
        fontFamily: "'Poppins', sans-serif",
        color: "#1a1a1a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-center text-lg-start mb-5 mb-lg-0 animate__animated animate__fadeInLeft">
            <h1
              style={{
                fontSize: "calc(2rem + 1vw)",
                fontWeight: "700",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              Hi, I'm{" "}
              <span style={{ color: "#764ba2", fontWeight: "800" }}>
                Prajwal Khandre
              </span>
            </h1>
            <h4
              style={{
                fontWeight: "500",
                fontSize: "1.4rem",
                marginBottom: "20px",
                color: "#333",
              }}
            >
              Frontend Developer & Full Stack Enthusiast
            </h4>
            <p
              style={{
                fontSize: "1.1rem",
                fontStyle: "italic",
                maxWidth: "500px",
                lineHeight: "1.7",
                color: "#555",
              }}
            >
              "Learning Full Stack Development is a journey — every component
              crafted brings us closer to a smarter tomorrow."
            </p>

            <div className="my-4 d-flex flex-wrap gap-3 justify-content-lg-start justify-content-center animate__animated animate__fadeInUp">
              {[
                { Icon: FaHtml5, color: "#E34F26", title: "HTML5" },
                { Icon: FaCss3Alt, color: "#1572B6", title: "CSS3" },
                { Icon: FaBootstrap, color: "#563D7C", title: "Bootstrap" },
                { Icon: FaJsSquare, color: "#F7DF1E", title: "JavaScript" },
                { Icon: FaReact, color: "#61DBFB", title: "ReactJS" },
                { Icon: FaNodeJs, color: "#68A063", title: "Node.js" },
                { Icon: DiMongodb, color: "#4DB33D", title: "MongoDB" },
                { Icon: SiMysql, color: "#00758F", title: "MySQL" },
                { Icon: FaGithub, color: "#000", title: "GitHub" },
              ].map(({ Icon, color, title }, idx) => (
                <div
                  key={idx}
                  className="icon-wrapper"
                  style={{
                    transition: "transform 0.3s ease, color 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Icon size={35} color={color} title={title} />
                </div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/prajwalkh1/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-3"
              style={{
                background: "linear-gradient(45deg, #667eea, #764ba2)",
                color: "#fff",
                padding: "12px 30px",
                fontWeight: "600",
                borderRadius: "30px",
                fontSize: "16px",
                border: "none",
                boxShadow: "0 6px 20px rgba(118, 75, 162, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(118, 75, 162, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(118, 75, 162, 0.3)";
              }}
            >
              Let’s Connect
            </a>
          </div>

          <div className="col-lg-6 col-md-12 text-center animate__animated animate__fadeInRight">
            <div
              style={{
                display: "inline-block",
                borderRadius: "25px",
                overflow: "hidden",
                border: "5px solid #fff",
                boxShadow: "0 12px 35px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow =
                  "0 16px 45px rgba(0, 0, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(0, 0, 0, 0.15)";
              }}
            >
              <img
                src={prajImage}
                alt="Prajwal Khandre"
                className="img-fluid"
                style={{
                  maxWidth: "400px",
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
