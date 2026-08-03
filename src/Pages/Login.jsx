import React, {useState,useContext } from "react";
import {Link,useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import {AuthContext} from "../context/AuthContext";

function Login(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  function loginUser() {
    if (email === "" || password === "") {
      setMessage("Please fill all values");
      return;
    }

    const user = {
      name: "Niharika",
      email: email,
    };

    login(user);
    navigate("/dashboard");
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow rounded">

      <h1 className="text-2xl font-bold text-center mb-6">
        Login
      </h1>

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />

      {message && (
        <p className="text-red-500 mb-4">
          {message}
        </p>
      )}

      <Button
        text="Login"
        onClick={loginUser}
      />

      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600">
          Register
        </Link>
      </p>

    </div>
  );
}

export default Login;