import React, {useContext} from "react";
import {Link,useNavigate} from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";

function Dashboard(){
  const {user,logout} = useContext(AuthContext);
  const navigate = useNavigate();
return (
<div className="p-6">
<h1 className="text-3xl font-bold mb-4">
     Dashboard
</h1>

<h2 className="text-xl mb-6">
Welcome {user ? user.name : "User"}
</h2>

<Link to="/age-calculator">
<button className="bg-blue-600 text-white p-2 rounded mr-3">
Calculate Age
</button>
</Link>

<button
onClick={()=>{
logout();
navigate("/login");
}}
className="bg-red-600 text-white p-2 rounded"
>
 Logout
</button>

</div>
  );
}

export default Dashboard;