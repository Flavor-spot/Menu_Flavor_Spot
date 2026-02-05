import { useState, useEffect } from 'react';
import MenuGrid from './components/MenuGrid';
import ProteinModal from './components/ProteinModal';
import { menuData } from './data/menuData';

function App() {
  const [activeCategory, setActiveCategory] = useState('pasta');
  const [loading, setLoading] = useState(true);
  const [proteinModalOpen, setProteinModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [selectedProtein, setSelectedProtein] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const openProteinModal = (item) => {
    setCurrentItem(item);
    setProteinModalOpen(true);
  };

  const closeProteinModal = () => {
    setProteinModalOpen(false);
  };

  const handleProteinSelect = (protein) => {
    setSelectedProtein(protein);
    closeProteinModal();
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div id="main-menu">
          <MenuGrid 
            category={activeCategory} 
            menuData={menuData} 
            openProteinModal={openProteinModal} 
          />
        </div>
      )}
      {proteinModalOpen && currentItem && (
        <ProteinModal 
          item={currentItem} 
          closeModal={closeProteinModal} 
          selectProtein={handleProteinSelect} 
        />
      )}
    </div>
  );
}

export default App;
