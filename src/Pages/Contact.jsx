const Contact = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        minHeight: "80vh",
        padding: "50px 20px",
      }}
    >
      <div
        className="text-center p-5"
        style={{
          borderRadius: "12px",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "700",
            fontSize: "38px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#1a1a1a",
          }}
        >
          Contact Me
        </h2>

        <p
          style={{
            fontSize: "17px",
            color: "#444",
            marginBottom: "35px",
            lineHeight: "1.8",
          }}
        >
          Let’s connect! Whether you want to collaborate, have a question, or
          just say hi — choose a platform below:
        </p>

        <div className="d-flex flex-column gap-3">
          <a
            href="mailto:prajwal.d.khandre@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              fontWeight: "600",
              padding: "12px",
              fontSize: "17px",
              border: "1.5px solid #333",
              borderRadius: "8px",
              color: "#1a1a1a",
              transition: "all 0.3s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1a1a1a";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#1a1a1a";
            }}
          >
            📧 Mail
          </a>

          <a
            href="https://www.linkedin.com/in/prajwalkh1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              fontWeight: "600",
              padding: "12px",
              fontSize: "17px",
              border: "1.5px solid #0072b1",
              borderRadius: "8px",
              color: "#0072b1",
              transition: "all 0.3s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0072b1";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#0072b1";
            }}
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/prajkh121"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              fontWeight: "600",
              padding: "12px",
              fontSize: "17px",
              border: "1.5px solid #333",
              borderRadius: "8px",
              color: "#333",
              transition: "all 0.3s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#333";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#333";
            }}
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
