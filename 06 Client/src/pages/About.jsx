import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="about">
      <h2>About MenuVision 3D</h2>

      <p>
        MenuVision 3D is an innovative restaurant menu system
        that allows customers to scan a QR code and explore food
        in interactive 3D before placing an order.
      </p>

      <Link to="/">← Back to Home</Link>
      
    </section>
  );
}

export default About;