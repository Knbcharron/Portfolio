import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768, // for tablets and below
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480, // for mobile phones
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const styles = {
    section: {
      backgroundColor: "#123642",
      minHeight: "100vh",
      padding: "40px 0",
      width: "100%",
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "center",
      padding: "0 10px",
    },
    heading: { fontSize: "2.5rem", color: "white", marginBottom: "5px" },
    subHeading: { fontSize: "1.2rem", color: "#ccc", marginBottom: "30px" },
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
      margin: "0 10px",
    },
    image: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid #ddd",
      marginBottom: "15px",
    },
    title: { fontSize: "1.2rem", color: "#333" },
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
