function LoadingScreen() {
  return (
    <div id="loading-screen" className="loading-screen">
      <div className="logo-container">
        <img src="img/logo.png" alt="Flavor Spot Logo" className="logo-img" />
        <h1 className="logo">Flavor Spot</h1>
      </div>
      <div className="loading-dots">
        <span className="loading-dot"></span>
        <span className="loading-dot"></span>
        <span className="loading-dot"></span>
      </div>
    </div>
  )
}

export default LoadingScreen;
