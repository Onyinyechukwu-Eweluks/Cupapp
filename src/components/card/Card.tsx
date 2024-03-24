import React from "react";

interface CardProps {
  title: string;
  color: string;
  size: string;
  children: React.ReactNode | JSX.Element[] | JSX.Element;
}

export const Card = ({ title, color, size, children }: CardProps) => {
  return (
    <div>
      <h1>Card</h1>
      <h2 style={{ color, fontSize: size }}>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
