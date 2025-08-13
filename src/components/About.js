import React, { useState, useEffect } from "react";

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100vw",
  minHeight: "100vh",
  padding: isMobile ? "1rem" : "2rem",
  paddingTop: isMobile ? "6rem" : "8rem", // ✅ push content below header
  boxSizing: "border-box",
  backgroundColor: "#0d2a36",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: "white",
};

  const topHeadingStyle = {
    textAlign: "center",
    marginBottom: "1rem",
  };

  const headingStyle = {
    fontSize: isMobile ? "2rem" : "2.5rem",
    fontWeight: "bold",
    margin: 0,
  };


  const contentWrapperStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "1000px",
    width: "100%",
  };

  const imageWrapperStyle = {
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: isMobile ? 0 : "3rem",
    marginBottom: isMobile ? "2rem" : 0,
  };

  const imageStyle = {
    width: isMobile ? "200px" : "250px",
    height: isMobile ? "200px" : "250px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
  };

  const textContentStyle = {
    flex: "1 1 auto",
    maxWidth: "700px",
  };

  const sectionHeadingStyle = {
    fontSize: isMobile ? "1.25rem" : "1.5rem",
    fontWeight: "600",
    marginBottom: "1rem",
    borderBottom: "2px solid #555",
    display: "inline-block",
    paddingBottom: "0.25rem",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "1rem",
  };

  const educationListStyle = {
    listStyleType: "none",
    paddingLeft: 0,
    marginBottom: "1.5rem",
  };

  const educationItemStyle = {
    marginBottom: "0.5rem",
  };

  const buttonStyle = {
    backgroundColor: "#1f2d4d",
    color: "white",
    padding: isMobile ? "0.6rem 1.2rem" : "0.75rem 1.5rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: isMobile ? "0.9rem" : "1rem",
    textDecoration: "none",
    display: "inline-block",
  };

  return (
    <div style={containerStyle}>
      {/* Title at top */}
      <div style={topHeadingStyle}>
        <h1 style={headingStyle}>My Profile</h1>
        <h4>---What I'm?---</h4>
      </div>

      {/* Content */}
      <div style={contentWrapperStyle}>
        <div style={imageWrapperStyle}>
          <img
            src={`${process.env.PUBLIC_URL}/p.jpg`}
            alt="Profile"
            style={imageStyle}
          />
        </div>

        <div style={textContentStyle}>
          <h2 style={sectionHeadingStyle}>Professional Profile</h2>
          <p style={paragraphStyle}>
            Aspiring IT professional with a strong foundation in Computer
            Science, I want to build my career with a well-known organization
            where I can apply my knowledge, skills and gain hands-on
            experience. Eager to contribute innovative solutions and grow in a
            dynamic tech environment.
          </p>

          <h2 style={sectionHeadingStyle}>Education</h2>
          <ul style={educationListStyle}>
            <li style={educationItemStyle}>
              • Bachelor of Technology in Computer Science | 2022–2025 | 81.8% |
              Vemu Institute of Technology, Chittoor
            </li>
            <li style={educationItemStyle}>
              • Diploma in ECE | 2019–2022 | 87% | Vemu Institute Of Technology,
              Chittoor
            </li>
            <li style={educationItemStyle}>
              • SSC | 2018–2019 | 100% | Z P High School, Gundla Kattamanchi
            </li>
          </ul>

          <a
            href={`${process.env.PUBLIC_URL}/charron resume.pdf`}
            style={buttonStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
