import './App.css'

function App() {
  return (
    <>

      <nav className="navbar">
        <h2>MenuVision 3D</h2>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>


      <section className="hero">
        <div className="hero-left">
          <h1>Experience Food Before You Order</h1>
          <p>
            Explore restaurant dishes in interactive 3D by simply scanning a QR code.
          </p>

          <div className="buttons">
            <button>Scan QR Menu</button>
            <button>Learn More</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-box">
            🍕 3D Food Preview
          </div>
        </div>
      </section>


      <section className="about">
        <h2>About MenuVision 3D</h2>
        <p>
          MenuVision 3D is an innovative restaurant menu system
          that allows customers to scan a QR code and explore
          food in interactive 3D before placing an order.
        </p>
      </section>

      <section className="features">
        <h2>Why Choose MenuVision 3D?</h2>

        <div className="feature-container">
          <div className="feature-card">
            <h3>📱 QR Scan</h3>
            <p>Scan the restaurant QR code to instantly access the digital menu.</p>
          </div>

          <div className="feature-card">
            <h3>🍕 3D Food View</h3>
            <p>View realistic 3D models of dishes before placing your order.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ Fast Ordering</h3>
            <p>Choose your favorite dishes quickly and improve your dining experience.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or want to know more about MenuVision 3D?
          We'd love to hear from you!
        </p>

        <div className="contact-info">
          <p>📧 Email: menuvision3d@gmail.com</p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>📍 Ahmedabad, Gujarat, India</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 MenuVision 3D. All Rights Reserved.</p>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </footer>

    </>
  )
}

export default App