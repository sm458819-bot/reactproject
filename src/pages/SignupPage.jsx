import { useState } from "react";

export default function SignupPage() {


  //const [name, setname] = useState("");
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  //const [confirmPassword, setconfirmmPassword] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("form submitted");
  };
  const ChangeHandler = (e) => {
    const Key = e.target.name;
    const value = e.target.value;

    setUserInfo({
      ...userInfo, [Key]: value
    })
  }


  return (

    <div style={{ borderRadius: "11px", width: "349px", padding: "34px", margin: "20px auto", backgroundColor: "rgba(229, 255, 152, 1)" }}>
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          style={{ width: "94%", padding: "8px", marginBottom: "10px" }}
          value={userInfo.name}
          onChange={ChangeHandler}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={{ width: "94%", padding: "8px", marginBottom: "10px" }}
          value={userInfo.email}
          onChange={ChangeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={{ width: "94%", padding: "8px", marginBottom: "10px" }}
          value={userInfo.password}
          onChange={ChangeHandler}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          style={{ width: "94%", padding: "8px", marginBottom: "10px" }}
          value={userInfo.confirmPassword}
          onChange={ChangeHandler}
        />
        <button
          type="submit"
          style={{
            padding: "8px",
            backgroundColor: "#222",
            color: "white",
            border: "none",

          }}
          value="Register"
        >
        
        </button>
      </form>

    </div>
  );
}
