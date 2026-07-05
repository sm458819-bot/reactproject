import { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("loginInfo", loginInfo)
    if (loginInfo.username && loginInfo.password) {
      try {
        const request = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginInfo),
        });
        if (!request.ok) {
          console.log(`Response status: ${request.status}`);
        }
        const res = await request.json();
        if (res.accessToken) {
          localStorage.setItem("token", res.accessToken);
          navigate("/dashboard");
        } else {
          console.log("Login failed");
        }
        console.log("res:", res);
      } catch (error) {
        console.log("error:", error);
      }
    } else {
      alert("email and password are required");
    }
  };

  const changeHandler = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="User Name"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          value={loginInfo.username}
          onChange={changeHandler}
          name="username"
        />

        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          value={loginInfo.password}
          onChange={changeHandler}
          name="password"
        />

        <input
          type="submit"
          style={{
            padding: "8px",
            backgroundColor: "#222",
            color: "white",
            border: "none",
          }}
          value="Login"
        />
      </form>
    </div>
  );
}

export default LoginPage;
