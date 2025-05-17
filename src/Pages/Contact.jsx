const Contact = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        minHeight: "80vh",
        padding: "50px 20px",
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
        fontFamily: "'Poppins', sans-serif",
        color: "#1a1a1a",
      }}
    >
      <div
        className="text-center p-5"
        style={{
          borderRadius: "16px",
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "#fff",
          boxShadow: "0 12px 30px rgba(0,0,0,0.07)",
          border: "1px solid #e2e2e2",
          transition: "box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 20px 45px rgba(0,0,0,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.07)";
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "700",
            fontSize: "40px",
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "#1a1a1a",
          }}
        >
          Contact Me
        </h2>

        <p
          style={{
            fontSize: "17.5px",
            color: "#555",
            marginBottom: "40px",
            lineHeight: "1.85",
            fontWeight: "500",
          }}
        >
          Let’s connect! Whether you want to collaborate, have a question, or
          just say hi — choose a platform below:
        </p>

        <div className="d-flex flex-column gap-3">
          {[
            {
              href: "mailto:prajwal.d.khandre@gmail.com",
              label: "📧 Mail",
              baseColor: "#1a1a1a",
              borderColor: "#1a1a1a",
            },
            {
              href: "https://www.linkedin.com/in/prajwalkh1",
              label: "💼 LinkedIn",
              baseColor: "#0072b1",
              borderColor: "#0072b1",
            },
            {
              href: "https://github.com/prajkh121",
              label: "💻 GitHub",
              baseColor: "#333",
              borderColor: "#333",
            },
          ].map(({ href, label, baseColor, borderColor }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                fontWeight: "600",
                padding: "14px",
                fontSize: "17px",
                border: `1.8px solid ${borderColor}`,
                borderRadius: "10px",
                color: baseColor,
                backgroundColor: "transparent",
                transition: "all 0.3s ease",
                textDecoration: "none",
                boxShadow: `0 3px 8px ${baseColor}20`,
                userSelect: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = baseColor;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow = `0 8px 20px ${baseColor}70`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = baseColor;
                e.currentTarget.style.boxShadow = `0 3px 8px ${baseColor}20`;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
