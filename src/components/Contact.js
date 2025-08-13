import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaTwitter, FaGraduationCap } from "react-icons/fa";

function Contact() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive container changes flexDirection and padding
  const container = {
    textAlign: "center",
    padding: isMobile ? "20px" : "100px",
    minHeight: "100vh",
    backgroundColor: "#123642",
    width: "100%",
  };

  // Main section switches from row to column on mobile
  const mainSection = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    textAlign: "left",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "30px" : "0",
  };

  const leftSection = {
    flex: "1",
    minWidth: "300px",
    maxWidth: "500px",
    padding: "20px",
    color: "white",
  };

  const rightSection = {
    flex: "1",
    minWidth: "300px",
    maxWidth: "500px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const title = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
  };

  const subTitle = {
    color: "#ccc",
    marginBottom: "40px",
  };

  const leftHeading = {
    fontWeight: "bold",
    fontSize: "1.3rem",
  };

  const para = {
    color: "white",
    marginBottom: "20px",
  };

  const infoItem = {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    gap: "10px",
  };

  const socialIcons = {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
    fontSize: "1.8rem",
  };

  const iconStyle = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const form = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const formRow = {
    display: "flex",
    gap: "10px",
    flexDirection: isMobile ? "column" : "row",
  };

  const input = {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const inputFull = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
  };

  const textarea = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
  };

  const button = {
    backgroundColor: "#0d2c54",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <div style={container}>
      {/* Heading */}
      <h2 style={title}>Contact Me</h2>
      <p style={subTitle}>—Get in Touch—</p>

      <div style={mainSection}>
        {/* Left Section */}
        <div style={leftSection}>
          <h3 style={leftHeading}>Get in Touch</h3>
          <p style={para}>
            Feel free to get in touch with me. I am always open to discussing new projects, 
            creative ideas or opportunities to be a part of your visions. Email me with any 
            questions or inquiries. I'll be happy to answer your questions and set up a 
            meeting with you.
          </p>

          <div style={infoItem}>
            <span>👤</span>
            <div>
              <strong>Name</strong>
              <p>K N B CHARRON</p>
            </div>
          </div>

          <div style={infoItem}>
            <span>📍</span>
            <div>
              <strong>Address</strong>
              <p>Sankranthi Palli (v), Chittoor, 517416</p>
            </div>
          </div>

          <div style={infoItem}>
            <span>✉️</span>
            <div>
              <strong>Email</strong>
              <p>knbcharron@gmail.com</p>
            </div>
          </div>

          <div style={infoItem}>
            <span>🌐</span>
            <div>
              <strong>Language Known</strong>
              <p>English, Telugu</p>
            </div>
          </div>

          {/* Social Icons */}
          <div style={socialIcons}>
            <a href="https://github.com/knbcharron" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaGithub /></a>
            <a href="https://www.linkedin.com/in/knb-charron-16089a269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaLinkedin /></a>
            <a href="tel:+919381491118" style={iconStyle}><FaPhone /></a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaTwitter /></a>
            <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaGraduationCap /></a>
          </div>
        </div>

        {/* Right Section */}
        <div style={rightSection}>
          <h3>Message me</h3>
          <form style={form}>
            <div style={formRow}>
              <input type="text" placeholder="Your Name" style={input} />
              <input type="email" placeholder="Your Email" style={input} />
            </div>
            <input type="text" placeholder="Subject" style={inputFull} />
            <textarea placeholder="Message.." rows="5" style={textarea}></textarea>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button style={button}>Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
