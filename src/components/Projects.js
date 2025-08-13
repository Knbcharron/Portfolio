import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
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
    centerMode: slidesToShow === 1,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
  };

  const styles = {
    section: {
      backgroundColor: "#0d2a36",
      minHeight: "100vh",
      paddingTop: "120px", // Adjusted for 60px header + 60px padding on desktop
      paddingBottom: "40px",
      width: "100%",
      maxWidth: "100vw", // Prevents extension beyond screen width
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box",
      overflowX: "hidden", // Prevents horizontal overflow
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
      color: "white",
      marginBottom: "5px",
      marginTop: "0px",
    },
    subHeading: {
      fontSize: "1.2rem",
      color: "#ccc",
      marginBottom: "30px",
    },
    card: {
      background: "white",
      borderRadius: "15px",
      padding: "20px",
      minHeight: "250px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      margin: "0 auto",
      maxWidth: "90%",
      marginTop: "40px",
    },
    image: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid #ddd",
      marginBottom: "15px",
    },
    title: {
      fontSize: "1.2rem",
      color: "#333",
    },
  };

  // Adjust paddingTop for mobile devices
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    styles.section.paddingTop = "70px"; // Adjusted for 50px mobile header + 20px padding
  }

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