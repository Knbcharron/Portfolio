import React from "react";

function About() {
  return (
    <>
      <style>{`
        .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          max-width: 100vw; /* Ensures it doesn't exceed screen width */
          min-height: 100vh;
          padding: 2rem;
          padding-top: 6rem; /* Adjusted for 60px header + padding */
          background-color: #0d2a36;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: white;
          box-sizing: border-box;
          overflow-x: hidden; /* Prevent horizontal overflow */
        }
        .about-header {
          text-align: center;
          margin-bottom: 1rem;
        }
        .about-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0;
        }
        .about-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          max-width: 1000px; /* Limits content width on larger screens */
          width: 100%;
          box-sizing: border-box; /* Include padding in width calculation */
        }
        .about-image-wrapper {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 3rem;
        }
        .about-image {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 15px rgba(0,0,0,0.3);
        }
        .about-text {
          flex: 1;
          max-width: 700px;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          border-bottom: 2px solid #555;
          display: inline-block;
          padding-bottom: 0.25rem;
        }
        .about-paragraph {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .education-list {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }
        .education-list li {
          margin-bottom: 0.5rem;
        }
        .download-btn {
          background-color: #1f2d4d;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 5px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          display: inline-block;
        }

        /* Tablet (≤ 1024px) */
        @media (max-width: 1024px) {
          .about-title {
            font-size: 2.2rem;
          }
          .about-image {
            width: 200px;
            height: 200px;
          }
        }

        /* Mobile (≤ 768px) */
        @media (max-width: 768px) {
          .about-container {
            padding: 1.5rem;
            padding-top: 5rem; /* Adjusted for 50px mobile header + padding */
          }
          .about-title {
            font-size: 1.8rem;
          }
          .about-content {
            flex-direction: column;
            text-align: center;
          }
          .about-image-wrapper {
            margin-right: 0;
            margin-bottom: 1.5rem;
          }
          .about-image {
            width: 160px;
            height: 160px;
          }
          .section-title {
            font-size: 1.25rem;
          }
          .about-paragraph {
            font-size: 0.95rem;
          }
          .download-btn {
            font-size: 0.9rem;
            padding: 0.6rem 1.2rem;
          }
        }

        /* Small phones (≤ 480px) */
        @media (max-width: 480px) {
          .about-container {
            padding: 1rem;
            padding-top: 4rem; /* Adjusted for 50px mobile header + padding */
          }
          .about-title {
            font-size: 1.5rem;
          }
          .about-image {
            width: 120px;
            height: 120px;
          }
          .about-paragraph {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="about-container">
        {/* Title */}
        <div className="about-header">
          <h1 className="about-title">My Profile</h1>
          <h4>---What I'm?---</h4>
        </div>

        {/* Content */}
        <div className="about-content">
          <div className="about-image-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/p.jpg`}
              alt="Profile"
              className="about-image"
            />
          </div>

          <div className="about-text">
            <h2 className="section-title">Professional Profile</h2>
            <p className="about-paragraph">
              Aspiring IT professional with a strong foundation in Computer
              Science, I want to build my career with a well-known organization
              where I can apply my knowledge, skills and gain hands-on
              experience. Eager to contribute innovative solutions and grow in a
              dynamic tech environment.
            </p>

            <h2 className="section-title">Education</h2>
            <ul className="education-list">
              <li>
                • B.Tech in Computer Science | 2022–2025 | 81.8% | Vemu Institute
                of Technology
              </li>
              <li>
                • Diploma in ECE | 2019–2022 | 87% | Vemu Institute Of Technology
              </li>
              <li>• SSC | 2018–2019 | 100% | Z P High School</li>
            </ul>

            <a
              href={`${process.env.PUBLIC_URL}/charron resume.pdf`}
              className="download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;