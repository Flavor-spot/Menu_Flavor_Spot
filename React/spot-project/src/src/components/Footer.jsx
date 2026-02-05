function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <i className="fa-solid fa-location-dot"></i>
          <a href="https://www.google.com/maps?q=Ola+Station+El+Shorouk" target="_blank" className="map-link">
            Ola Station, Al Shorouk 1 Entrance
          </a>
        </div>

        <div className="footer-item">
          <i className="fa-solid fa-phone"></i>
          <a href="tel:01156156488">01156156488</a>
        </div>

        <div className="footer-item">
          <i className="fa-brands fa-whatsapp"></i>
          <a href="https://wa.me/201156156488?text=مرحباً%20!%20أهلاً%20بك%20في%20Flavor%20Spot.%20ازاي%20نقدر%20نساعدك؟"
            target="_blank">
            WhatsApp
          </a>
        </div>
      </div>

      <p className="copyright">
        ©️ 2026 Flavor Spot – All Rights Reserved <br />
        CR No.: 776781677
      </p>
    </footer>
  )
}

export default Footer;
