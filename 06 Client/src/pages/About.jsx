function About() {
  return (
    <div className="about-page">

      <h1>About MenuVision 3D</h1>

      <p>
        MenuVision 3D is an innovative restaurant menu system
        that allows customers to scan a QR code and explore
        food in interactive 3D before placing an order.
      </p>

      <h2>Why Choose MenuVision 3D?</h2>

      <div className="feature-container">

        <div className="feature-card">
          <h3>📱 QR Scan</h3>
          <p>
            Scan the restaurant QR code to instantly access
            the digital menu.
          </p>
        </div>

        <div className="feature-card">
          <h3>🍕 3D Food View</h3>
          <p>
            View realistic 3D models of dishes before
            placing your order.
          </p>
        </div>

        <div className="feature-card">
          <h3>⚡ Fast Ordering</h3>
          <p>
            Choose your favorite dishes quickly and
            improve your dining experience.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About