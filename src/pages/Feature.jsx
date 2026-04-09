import React from "react";

export default function Feature() {
  const data = [
    {
      img: "/sofa.png",
      name: "Chair",
    },
    {
      img: "/bedroom.png",
      name: "Bed",
    },
    {
      img: "/cuboard.png",
      name: "Cuboard",
    },
    {
      img: "/lamp.png",
      name: "Lighting",
    },
  ];
  return (
    <div className="feature">
      <div className="feature-text">
        <h2>
          New In <br /> Store Now
        </h2>
        <p>Get the latest items immediately with promo prices</p>
        <button id="btncheck">
          Check All{" "}
          <img
            src="/right-arrow.png"
            alt=""
            width={25}
            height={25}
            style={{ resize: "cover" }}
          />
        </button>
      </div>

      <div className="feature-gallery">
        {data.map((item, index) => (
          <div className="feature-card" key={index}>
            <img src={item.img} alt={item.name} />
            <span className="card-label">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
