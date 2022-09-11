import React from "react";

export default function CardImage({ front_default }) {
  return (
    <div className="card-image">
      <img src={front_default} alt="image" />
    </div>
  );
}
