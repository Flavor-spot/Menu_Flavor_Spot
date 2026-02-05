import React, { useState } from 'react';

function ProteinModal({ item, closeModal, selectProtein }) {
  const [selectedOption, setSelectedOption] = useState(null);

  if (!item) return null;

  const handleAdd = () => {
    if (selectedOption) {
      selectProtein(selectedOption);
      closeModal();
    }
  };

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close" onClick={closeModal} style={{ cursor: 'pointer' }}>&times;</span>
        <h3>Select Your Protein</h3>
        <div className="protein-options" style={{ margin: '1rem 0' }}>
          {item.proteinOptions.map((opt, index) => (
            <label key={index} style={{ display: 'block', margin: '0.5rem 0' }}>
              <input 
                type="radio" 
                name="protein" 
                value={opt.name} 
                onChange={() => setSelectedOption(opt)}
              /> {opt.name} (+{opt.price} EGP)
            </label>
          ))}
        </div>
        <p style={{ fontWeight: 600, color:'#ffd700', marginBottom: '1rem' }}>
          Extra: {selectedOption ? selectedOption.price : 0} EGP
        </p>
        <button 
          onClick={handleAdd} 
          style={{ padding: '0.5rem 1rem', background:'#ffd700', border:'none', borderRadius:'5px', cursor:'pointer' }}
        >
          Add Protein
        </button>
      </div>
    </div>
  );
}

export default ProteinModal;
