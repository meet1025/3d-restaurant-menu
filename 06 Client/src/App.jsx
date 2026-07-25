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

    </>
  )
}

export default App