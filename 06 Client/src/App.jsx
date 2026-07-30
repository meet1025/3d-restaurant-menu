import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  //Home Page
  const Home = () => {
    return (
      <>

        {/* Navbar */}
        <nav className="navbar">
        <h2>MenuVision 3D</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <a href="#features">Features</a>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>


      {/* Hero Section */}
      <section id="hero" className="hero">
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


      {/* About Section */}
      <section id="about" className="about">
        <h2>About MenuVision 3D</h2>
        <p>
          MenuVision 3D is an innovative restaurant menu system
          that allows customers to scan a QR code and explore
          food in interactive 3D before placing an order.
        </p>
      </section>


      {/* Feature Section */}
      <section id="features" className="features">
        <h2>Why Choose MenuVision 3D?</h2>

        {/* Feature 1 */}
        <div className="feature-container">
          <div className="feature-card">
            <h3>📱 QR Scan</h3>
            <p>Scan the restaurant QR code to instantly access the digital menu.</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <h3>🍕 3D Food View</h3>
            <p>View realistic 3D models of dishes before placing your order.</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <h3>⚡ Fast Ordering</h3>
            <p>Choose your favorite dishes quickly and improve your dining experience.</p>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="contact">
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


      {/* Footer */}
      <footer className="footer">
        <p>© 2026 MenuVision 3D. All Rights Reserved.</p>

        <div className="footer-links">
           <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <a href="#features">
            Features
          </a>

          <Link to="/contact">
            Contact
          </Link>
        </div>
      </footer>
      </>
    )
  }

  return (
    <>

      {/* Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App