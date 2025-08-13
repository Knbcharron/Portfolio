import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {
  const sliderRef = useRef(null);
  const [activeTab, setActiveTab] = useState("skills");

  const projects = {
    skills: [
      { id: 1, title: "Java", image: "java.jpg" },
      { id: 2, title: "React.js", image: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
      { id: 3, title: "Html&CSS", image: "https://cdn-icons-png.flaticon.com/512/919/919826.png" },
      { id: 4, title: "SQL", image: "sql.png" },
    ],
    internships: [
      { id: 5, title: "Infosys Internship", image: "infosys.png" },
      { id: 6, title: "Slash Mark Internship", image: "mark.png" },
    ],
    certifications: [
      { id: 7, title: "Java Certification", image: "java Certification.png" },
      { id: 8, title: "Responsive Web Design", image: "web certification.jpg" },
      { id: 9, title: "SQL Certification", image: "sql certification.jpg" },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [activeTab]);

  const styles = {
    section: {
      backgroundColor: "#1A2A44",
      minHeight: "100vh",
      paddingTop: "60px", // Adjusted to 60px (matches assumed 60px desktop header)
      paddingBottom: "40px",
      width: "100%",
      maxWidth: "100vw",
      color: "white",
      fontFamily: "Arial, sans-serif",
      boxSizing: "border-box",
      overflowX: "hidden",
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "center",
      padding: "0 10px",
      flex: 1,
      boxSizing: "border-box",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "10px",
      WebkitBackgroundClip: "text",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
    },
    subHeading: { fontSize: "1.2rem", color: "#ccc", marginBottom: "30px" },
    tabs: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "30px",
      gap: "30px",
    },
    tabButton: (isActive) => ({
      cursor: "pointer",
      fontSize: "1.2rem",
      paddingBottom: "6px",
      borderBottom: isActive ? "3px solid #A3BFFA" : "3px solid transparent",
      color: isActive ? "#A3BFFA" : "#ccc",
      fontWeight: isActive ? "bold" : "normal",
      background: "none",
      border: "none",
      outline: "none",
    }),
    card: {
      background: "white",
      borderRadius: "15px",
      padding: "20px",
      minHeight: "300px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      margin: "0 10px",
      color: "#333",
      width: "300px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    image: {
      width: "140px",
      height: "140px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "4px solid #ddd",
      marginBottom: "20px",
    },
    title: { fontSize: "1.5rem", fontWeight: "600" },
  };

  // Adjust paddingTop for mobile devices
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    styles.section.paddingTop = "50px"; // Adjusted to 50px (matches assumed 50px mobile header)
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.heading}>My Skills</h1>
        <p style={styles.subHeading}>--- What I Know? ---</p>

        <div style={styles.tabs}>
          {["skills", "internships", "certifications"].map((tab) => (
            <button
              key={tab}
              style={styles.tabButton(activeTab === tab)}
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <Slider ref={sliderRef} {...settings}>
          {projects[activeTab].map((card) => (
            <div key={card.id}>
              <div style={styles.card}>
                <img
                  src={
                    card.image.startsWith("http")
                      ? card.image
                      : `${process.env.PUBLIC_URL}/${card.image}`
                  }
                  alt={card.title}
                  style={styles.image}
                />
                <h3 style={styles.title}>{card.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}