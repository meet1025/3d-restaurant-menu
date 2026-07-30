function Menu() {
  return (
    <div className="menu-page">

      <h1>Our Menu</h1>

      <p>
        Explore our delicious dishes before placing your order.
      </p>

      <div className="menu-container">

        <div className="menu-card">
          <h2>🍕 Pizza</h2>
          <p>₹250</p>
          <button>View 3D</button>
        </div>

        <div className="menu-card">
          <h2>🍔 Burger</h2>
          <p>₹180</p>
          <button>View 3D</button>
        </div>

        <div className="menu-card">
          <h2>🍝 Pasta</h2>
          <p>₹220</p>
          <button>View 3D</button>
        </div>

      </div>

    </div>
  )
}

export default Menu