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
    position: "relative",
    display: "flex",
    alignItems: "center",
    paddingLeft: isMobile ? "5%" : "10%",
    color: "white",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: isMobile ? "center" : "flex-start",
  };

const textStyle = {
  position: "absolute",
  top: isMobile ? "15%" : "50%", 
  left: "50%",
  transform: isMobile ? "translate(-50%, 0)" : "translate(-50%, -50%)",
  fontSize: isMobile ? 14 : 30,
  fontWeight: "bold",
  color: "white",
  opacity: 0,
  animation: "fadeIn 2s forwards, rotate 5s linear infinite",
  animationDelay: "1s, 3s",
  whiteSpace: "nowrap",
  zIndex: 1,
};

  const wrapper = {
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile ? "center" : "flex-start",
    maxWidth: "500px",
    zIndex: 2,
    textAlign: isMobile ? "center" : "left",
  };

  const yellowText = {
    color: "#f5d142",
  };

  const hireButton = {
    backgroundColor: "white",
    color: "black",
    padding: "10px 20px",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const headingCommon = {
    margin: 0,
    padding: 0,
    lineHeight: 1.2,
  };

  return (
    <div style={sectionStyle}>
      {/* Left side content */}
      <div style={wrapper}>
        <h3 style={headingCommon}>Hello,</h3>
        <h1 style={{ ...headingCommon, fontSize: isMobile ? "2rem" : "2.5rem" }}>
          I'm <span style={yellowText}>Charron</span>
        </h1>

        <p style={{ marginTop: "10px", marginBottom: 0 }}>
          I am a skilled web designer with experience in creating visually
          appealing and user-friendly websites.
        </p>

        <button style={hireButton}>
         <img
            src={`${process.env.PUBLIC_URL}/bag.png`}
            alt="bag"
            style={{ width: "18px", height: "18px" }}
             />
          Hire Me
        </button>
      </div>

      {/* Center animated text */}
      <p style={textStyle}>I'm full stack developer</p>
    </div>
  );
}

// Inject animations once
const styles = document.createElement("style");
styles.innerHTML = `
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
`;
document.head.appendChild(styles);

export default Home;
