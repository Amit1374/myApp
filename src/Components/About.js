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
          Welcome to our website! We are passionate about building modern web applications using the latest technologies.
          Our team is dedicated to delivering high-quality solutions that help users achieve their goals efficiently.
        </p>
        <h3 style={{ color: "#6366f1", fontWeight: 600, marginBottom: "0.5rem" }}>
          Our Mission
        </h3>
        <p style={{ color: "#4b5563", marginBottom: "1.5rem" }}>
          To provide innovative and user-friendly web experiences that make a difference.
        </p>
        <h3 style={{ color: "#6366f1", fontWeight: 600, marginBottom: "0.5rem" }}>
          Contact
        </h3>
        <p style={{ color: "#4b5563" }}>
          Have questions or feedback? Reach out to us at{" "}
         
        </p>
      </section>
    </>
 
  )
}
