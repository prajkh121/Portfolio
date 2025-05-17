const Footer = () => {
  return (
    <footer
      className="py-4 mt-auto"
      style={{
        background: "linear-gradient(90deg, #e0c3fc, #8ec5fc)",
        color: "#1a1a1a",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "16px",
        fontWeight: 600,
        boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
