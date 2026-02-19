import React from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const data = [
    {
      img: "/public/ceiling-light.png",
      price: "$45.00",
      actual: "$85.00",
      name: "Ceiling Light",
    },
    {
      img: "/public/chair.png",
      price: "$45.00",
      actual: "$85.00",
      name: "Wood Chair",
    },
    {
      img: "/public/cuboard-papper.png",
      price: "$45.00",
      actual: "$85.00",
      name: "Papper-cupboard",
    },
    {
      img: "/public/bed.png",
      price: "$45.00",
      actual: "$85.00",
      name: "Ole Gundorse Spring...",
    },
    {
      img: "/public/bed-chair.png",
      price: "$45.00",
      actual: "$85.00",
      name: "Treos Seroes 911",
    },
    {
      img: "/public/llight-wall.png",
      price: "$45.00",
      actual: "$85.00",
      name: "Multi bilderman slibber...",
    },
    {
      img: "/public/table.png",
      price: "$45.00",
      actual: "$85.00",
      name: "XORA corner desk",
    },
    {
      img: "/public/baby-bed.png",
      price: "$45.00",
      actual: "$85.00",
      name: "Black Forest Series wo...",
    },
  ];

  return (
    <div className="product-container">
      <h1 style={{ textAlign: "center" }}>All Product</h1>
      <p
        style={{
          textAlign: "center",
          width: "30%",
          margin: "0 auto",
        }}
      >
        The products we provide only for you as our service are selected from
        the best products with number 1 quality in the world
      </p>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <div className="productWrapper">
          {data.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </div>
      </div>
      <div className="pagination">
        <button className="page-arrow prev" disabled>
          <img src="/arrow-left.png " alt="prev" />
        </button>
        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <button className="page-arrow next">
          <img src="/right-arrow.png" alt="next" />
        </button>
      </div>
    </div>
  );
}

export default Products;
