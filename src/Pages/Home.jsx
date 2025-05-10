import prajImage from "../assets/prajwal.jpg";

const Home = () => {
  return (
    <div
      className="hero-section d-flex align-items-center"
      style={{
        minHeight: "80vh",
        padding: "60px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-center text-lg-start mb-5 mb-lg-0">
            <h1
              style={{
                fontSize: "calc(1.8rem + 1.3vw)",
                fontWeight: "700",
                color: "#1a1a1a",
                marginBottom: "10px",
                letterSpacing: "1px",
              }}
            >
              Hi, I'm{" "}
              <span style={{ color: "#007bff", fontWeight: "800" }}>
                Prajwal Khandre
              </span>
            </h1>
            <h4
              style={{
                color: "#444",
                fontWeight: "500",
                fontSize: "1.35rem",
                marginBottom: "20px",
              }}
            >
              Frontend Developer & Full Stack Enthusiast
            </h4>
            <p
              style={{
                fontSize: "1.1rem",
                fontStyle: "italic",
                maxWidth: "500px",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              "Learning Full Stack Development is a journey — every component
              crafted brings us closer to a smarter tomorrow."
            </p>
            <a
              href="https://www.linkedin.com/in/prajwalkh1/"
              target="blank"
              className="btn mt-4"
              style={{
                background: "linear-gradient(45deg, #007bff, #0056b3)",
                color: "#fff",
                padding: "12px 30px",
                fontWeight: "500",
                borderRadius: "30px",
                fontSize: "16px",
                border: "none",
                boxShadow: "0 6px 20px rgba(0, 123, 255, 0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0, 123, 255, 0.5)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(0, 123, 255, 0.4)";
              }}
            >
              Let's Connect
            </a>
          </div>

          <div className="col-lg-6 col-md-12 text-center">
            <div
              style={{
                display: "inline-block",
                borderRadius: "25px",
                overflow: "hidden",
                border: "5px solid #fff",
                boxShadow: "0 12px 35px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow =
                  "0 16px 45px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(0, 0, 0, 0.2)";
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
