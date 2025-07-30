import React from 'react'

export default function About() {
  return (
      <>
      <section
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          padding: "2rem",
          background: "linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px rgba(60,72,88,0.08)",
        }}
      >
        <h2 style={{ color: "#3b82f6", fontWeight: 700, marginBottom: "1rem" }}>
          About Us
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#374151", marginBottom: "1.5rem" }}>
          This website is made to help you in your daily day to day text editing tasks.
          It provides a simple and intuitive interface for editing text, making it easier to manage your content.
          Whether you need to format text, or perform other simplle editing tasks, you can also download the text in docx format , this website is designed to assist you efficiently.
        </p>
        <h3 style={{ color: "#6366f1", fontWeight: 600, marginBottom: "0.5rem" }}>
          Our Mission
        </h3>
        <p style={{ color: "#4b5563", marginBottom: "1.5rem" }}>
          Our mission is to create user-friendly and innovative web applications that enhance productivity and provide a seamless user experience.
          We strive to stay at the forefront of technology trends to deliver cutting-edge solutions.
        </p>
        <h3 style={{ color: "#6366f1", fontWeight: 600, marginBottom: "0.5rem" }}>
          Thanks for visting our website.
        </h3>
        <p style={{ color: "#4b5563" }}>
            Designed by Amit Vishwakarma   {" "}
         
        </p>
      </section>
    </>
 
  )
}
