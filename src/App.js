function App() {
  const products = [
    { name: "Shoes", price: 1999 },
    { name: "Watch", price: 2999 },
    { name: "Bag", price: 1499 }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Cloud E-Commerce App</h1>
      <h3>Deployed on Cloud Platform</h3>

      {products.map((p, index) => (
        <div key={index} style={{ margin: "20px", padding: "10px", border: "1px solid black" }}>
          <h2>{p.name}</h2>
          <p>₹{p.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default App;