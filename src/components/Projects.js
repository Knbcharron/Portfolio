import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(1); // Always 1 card
      setWindowWidth(window.innerWidth); // Track width for responsive styles
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    { id: 1, title: "Medicine Recommendation System", image: "medicine.jpg" },
    { id: 2, title: "Mental Health Chat Bot", image: "chatbot.jpg" },
    { id: 3, title: "Portfolio", image: "portfolio.jpg" },
    { id: 4, title: "TODO LIST", image: "todo.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
  };

  // Responsive dynamic styles
  const isMobile = windowWidth <= 768;
  const styles = {
    section: {
      backgroundColor: "#1A2A44",
      minHeight: "100vh",
      paddingTop: isMobile ? "20px" : "120px",
      paddingBottom: "40px",
      width: "100%",
      maxWidth: "100vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box",
      overflowX: "hidden",
    },
    container: {
      width: isMobile ? "95%" : "500px", // shrink for mobile
      margin: "0 auto",
      textAlign: "center",
      padding: "0 10px",
      flex: 1,
      boxSizing: "border-box",
    },
    heading: {
      fontSize: isMobile ? "1.8rem" : "2.5rem",
      color: "white",
      marginBottom: "5px",
      marginTop: "0px",
    },
    subHeading: {
      fontSize: isMobile ? "1rem" : "1.2rem",
      color: "#ccc",
      marginBottom: "30px",
    },
    card: {
      background: "white",
      borderRadius: "15px",
      padding: isMobile ? "15px" : "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      margin: "0 auto",
      width: "100%", // responsive full width inside container
      maxWidth: isMobile ? "280px" : "400px", // shrink for mobile
      marginTop: "20px",
      minHeight: isMobile ? "auto" : "250px",
    },
    image: {
      width: isMobile ? "90px" : "120px",
      height: isMobile ? "90px" : "120px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid #ddd",
      marginBottom: "15px",
    },
    title: {
      fontSize: isMobile ? "1rem" : "1.2rem",
      color: "#333",
      textAlign: "center",
      wordWrap: "break-word",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.heading}>My Projects</h1>
        <p style={styles.subHeading}>--- What I Did? ---</p>

        <Slider {...settings}>
          {projects.map((p) => (
            <div key={p.id}>
              <div style={styles.card}>
                <img
                  src={`${process.env.PUBLIC_URL}/${p.image}`}
                  alt={p.title}
                  style={styles.image}
                />
                <h3 style={styles.title}>{p.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
