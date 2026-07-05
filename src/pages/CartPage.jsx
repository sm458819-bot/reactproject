import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

export default function CartPage() {
  const {cart,removeFromCart, increaseQuantity,decreaseQuantity} = useContext(CartContext);
  console.log("cart in cart page", cart);

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        padding: "2rem",
        fontFamily: "Arial",
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ flex: 3 }}>
        <h2>Your Cart</h2>
        <hr />
        {/* <p style={{ marginTop: "2rem", color: "gray" }}>Your cart is empty 😢</p>  */}
        {cart.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                marginTop: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "80px", borderRadius: "8px" }}
              />

              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>

                <div>
                  <button
                    onClick={() => {
                      /*onDecrease */
                    decreaseQuantity(item.id); }}
                  >
                    ➖
                  </button>
                  <span style={{ margin: "0 10px" }}></span>
                   {item.quantity}
                  <button
                    onClick={() => {
                      /*onDecrease*/
                    increaseQuantity(item.id);}}
                  >
                    ➕
                  </button>
                </div>
              </div>

              <div>
                <p>total:${item.price}</p>
                <button
                  style={{
                    marginTop: "8px",
                    padding: "5px 10px",
                    background: "red",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT SIDE = SUMMARY */}
      <div
        style={{
          flex: 1,
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1rem",
          height: "fit-content",
        }}
      >
        <h2>Summary</h2>
        <hr />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "6px",
          }}
        >
          <span>Test title</span>
          <span>$12</span>
        </div>

        <hr />

        <h3 style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Total:</span>
          <span>$00</span>
        </h3>

        <button
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "1rem",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
