const Footer = () => {
  return (
    <footer className="py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-0" style={{ fontSize: "16px" }}>
          &copy; {new Date().getFullYear()} <strong>MyPortfolio</strong>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
