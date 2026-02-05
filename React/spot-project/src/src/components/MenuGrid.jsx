import React, { useState } from 'react';

function MenuGrid({ category, menuData, openProteinModal }) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = (item) => {
    if (item.proteinOptions) {
      openProteinModal(item);
    } else {
      alert("No protein options available for this item.");
    }
  };

  const getBadgeContent = (type) => {
    if (type === "best") return <><i className="fa-solid fa-crown"></i> Best Seller</>;
    if (type === "favorite") return <><i className="fa-solid fa-star"></i> Customer Favorite</>;
    if (type === "new") return <><i className="fa-solid fa-bolt"></i> New</>;
  };

  return (
    <section className={`menu-grid ${fadeOut ? 'fade-out' : ''}`}>
      {menuData[category].map((item, index) => (
        <div className="menu-item" key={index}>
          <div className="img-wrapper">
            {item.badge && <span className={`badge ${item.badge}`}>{getBadgeContent(item.badge)}</span>}
            <img src={item.img} alt={item.name} loading="lazy" />
          </div>
          <div className="menu-item-content">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <span className="price" style={{ display: 'block', textAlign: 'center', margin: '0.5rem 0' }}>
              {item.price} EGP
            </span>
            {(category === "pasta" || category === "fries") && (
              <button 
                className="protein-btn" 
                style={{ display: 'block', margin: '0 auto', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', background: '#ffd700', color: '#000', cursor: 'pointer' }}
                onClick={() => handleClick(item)}
              >
                {category === "pasta" ? "Choose Your Protein" : "Choose Your Sauce"}
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default MenuGrid;
