import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section className="contact">
      <h2>Contact MenuVision 3D</h2>

      <p>
        Have questions about MenuVision 3D?
        Feel free to contact us.
      </p>

        <Link to="/">← Back to Home</Link>

    </section>
  );
}

export default Contact;