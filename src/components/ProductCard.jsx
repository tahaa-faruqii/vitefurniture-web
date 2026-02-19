import React from "react";
function ProductCard({ data }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={data.img} alt={data.name} />
        {/* The + button is absolute to this wrapper */}
        <button className="add-btn">+</button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{data.name}</h3>
        <div className="price-row">
          <span className="current-price">${data.price}.00</span>
          <span className="old-price">${data.actual}.00</span>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
