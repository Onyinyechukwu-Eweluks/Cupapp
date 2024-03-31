import React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  color: string;
  size: "small" | "medium" | "large";
  width: string;
  image: string;
}

export const Card = ({ title, color, size, width, image }: CardProps) => {
  return (
    <div>
      <h1>Card</h1>
      <div className="card">
        <img src={image} alt="Avatar" style={{ width }} />
        <div className="container">
          <h4 style={{ color, fontSize: size }}>
            <b>{title}</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
      <button style={{ color }}>Click me</button>
    </div>
  );
};
