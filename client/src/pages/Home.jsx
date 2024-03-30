import React from "react";
import './HomeFooter.css';
//import appstore from './images/appstore.png';
//import playstore from './images/playstore.png';


export default function Home() {
  return (
    <>
      <div
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <img
          src="https://r2.easyimg.io/ucziy9zu7/photo-1520854221256-17451cc331bf.jpg"
          style={{ width: "100%", height: "50%", objectFit: "cover" }}
          alt=""
        />

        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            
          }}
          className="hero-text"
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              color: "#fff",
              height:"700px"
            }}
          >
            Plan The Best Event Ever.
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#fff",
              padding: "0.5rem 0 2rem 0",
              
            }}
          >
            Plan Your next Event, easier than ever
          </p>
        </div>
        
      </div>
      

{/* Footer */}
<div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          backgroundColor: "#333",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* Left Section */}
        <div>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="link-to-appstore-image" alt="App Store" style={{ width: "40px", marginRight: "10px" }} />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src="link-to-playstore-image" alt="Play Store" style={{ width: "40px" }} />
          </a>
        </div>

        {/* Center Section */}
        <div style={{ textAlign: "center" }}>
          <h1>smartEvent</h1>
          <p>High Quality is our first priority</p>
          <p>Copyrights 2024 &copy; Dina Baluashvili & Amit Cohen</p>
        </div>

        {/* Right Section */}
        <div>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="link-to-instagram-image" alt="Instagram" style={{ width: "40px", marginRight: "10px" }} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="link-to-facebook-image" alt="Facebook" style={{ width: "40px" }} />
          </a>
        </div>
      </div>
    </>
    
      );
    }
  