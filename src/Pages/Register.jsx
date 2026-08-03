import React, {useState} from "react";
import {Link,useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
function Register() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message,setMessage] = useState("");
  const navigate = useNavigate();
function registerUser() {
    setMessage("");

    if (
      name === "" ||email === "" ||password === "" ||confirmPassword === ""
    ) {
      setMessage("Please fill all values");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

localStorage.setItem("name", name);
localStorage.setItem("email", email);
localStorage.setItem("password", password);

navigate("/login");
}

return (
<div className="max-w-md mx-auto mt-10 bg-white p-6 shadow rounded">
<h1 className="text-2xl font-bold text-center mb-6">
Register
</h1>

<Input
 label="Name"
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
 placeholder="Enter Name"
/>

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

<Input
label="Confirm Password"
 type="password"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
placeholder="Confirm Password"
/>

{message && (
<p className="text-red-500 mb-4">
{message}
</p>
)}

<Button
text="Register"
onClick={registerUser}
/>
<p className="text-center mt-4">
  Already have an account?{" "}
<Link to="/login" className="text-blue-600">
Login
</Link>
</p>

    </div>
  );
}

export default Register;