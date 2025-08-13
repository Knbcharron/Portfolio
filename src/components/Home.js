import React, { useState, useEffect } from "react";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionStyle = {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL}/bg1.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: isMobile ? "flex-start" : "flex-start",
    alignItems: isMobile ? "flex-start" : "center",
    padding: isMobile ? "20px 20px 20px" : "0 10%", // Reduced top padding on mobile
    color: "white",
    boxSizing: "border-box",
  };

  const wrapper = {
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile ? "center" : "flex-start",
    textAlign: isMobile ? "center" : "left",
    maxWidth: isMobile ? "100%" : "500px",
    zIndex: 2,
    marginTop: isMobile ? "40px" : "0", // Added margin to push content down on mobile
  };

  const yellowText = {
    color: "#f5d142",
  };

  const headingCommon = {
    margin: 0,
    padding: 0,
    lineHeight: 1.2,
  };

  const hireButton = {
    backgroundColor: "white",
    color: "black",
    padding: isMobile ? "8px 16px" : "10px 20px",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: isMobile ? "0.9rem" : "1rem",
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const textStyle = {
    position: "absolute",
    top: isMobile ? "none" : "50%", // Hide on mobile by removing top positioning
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: isMobile ? "0" : "30px", // Hide text on mobile by setting font size to 0
    fontWeight: "bold",
    color: "white",
    opacity: 0,
    animation: "fadeIn 2s forwards, rotate 5s linear infinite",
    animationDelay: "1s, 3s",
    whiteSpace: "nowrap",
    zIndex: 1,
    display: isMobile ? "none" : "block", // Explicitly hide on mobile
  };

  return (
    <div style={sectionStyle}>
      {/* Left Content */}
      <div style={wrapper}>
        <h3 style={headingCommon}>Hello,</h3>
        <h1 style={{ ...headingCommon, fontSize: isMobile ? "1.8rem" : "2.5rem" }}>
          I'm <span style={yellowText}>Charron</span>
        </h1>
        <p style={{ marginTop: "10px", marginBottom: 0, fontSize: isMobile ? "0.9rem" : "1rem" }}>
          I am a skilled web designer with experience in creating visually appealing and
          user-friendly websites.
        </p>
        <button style={hireButton}>
          <img
            src={`${process.env.PUBLIC_URL}/bag.png`}
            alt="bag"
            style={{ width: isMobile ? "16px" : "18px", height: isMobile ? "16px" : "18px" }}
          />
          Hire Me
        </button>
      </div>

      {/* Center animated text */}
      <p style={textStyle}>I'm full stack developer</p>
    </div>
  );
}

// CSS Animations
const styles = document.createElement("style");
styles.innerHTML = `
@keyframes fadeIn {
  to { opacity: 1; }
}
@keyframes rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
`;
document.head.appendChild(styles);

export default Home;