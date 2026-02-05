function Tabs() {
  return (
    <nav className="tabs">
      <button className="tab active" data-category="pasta">Pasta</button>
      <button className="tab" data-category="fries">Fries</button>
      <button className="tab" data-category="desserts">Desserts</button>
    </nav>
  )
}

export default Tabs;
