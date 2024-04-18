import React from "react";

export default function Card({ img, location, description }) {
  return (
    <div classNane="card">
      <img src={img} className="card-image" />
      <div className="card-stats">
        <ul className="card-list-item">
          <li>{location}</li>
          <li>{description}</li>
        </ul>
      </div>
    </div>
  );
}
