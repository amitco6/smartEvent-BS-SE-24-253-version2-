
import React from "react";

import Footer from "./Footer";

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
          <a href="/">Travel Plan</a>
        </div>
      </div>
      <Footer/>
    </>
  );
}
