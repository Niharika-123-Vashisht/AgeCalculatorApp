import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
return (
<div className="bg-blue-600 text-white p-4 flex justify-between items-center">
<h1 className="text-xl font-bold">Age Calculator</h1>
<div className="space-x-4">

  <Link to="/dashboard" className="hover:underline">
    Dashboard
   </Link>

<Link to="/age-calculator" className="hover:underline">
     Age Calculator
</Link>
</div>
    </div>
  );
}

export default Navbar;