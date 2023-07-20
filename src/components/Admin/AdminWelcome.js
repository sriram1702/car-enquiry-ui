import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
//Welcome page for Admin
const AdminWelcome = () => {
    const { isAuthenticated, user,isLoading } = useAuth0();

    return (
        <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class ="container"><b>
<a class="navbar-brand" href="/">CAR SHOWROOM</a></b>
<button class="navbar-toggler" type="button" data-toggle="collapse"
data-target="#navbarSupportedContent"
aria-controls="#navbarSupportedContent"  aria-expanded="false"
aria-label="Toggle navigation">
<span class="navbar-toggler-icon"> </span>
</button>
<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
<ul class="navbar-nav ml-auto">
<li  class="nav-item active"><a class="nav-link" href="/admin">Admin Page</a></li>

<li  class="nav-item active"><a class="nav-link" href="/user">Cars</a></li>
 <li class="nav-item "><a class="nav-link" href="/profile">Profile</a></li>

</ul>
</div>
</div>
</nav>   
        {/* <div>
        <Link 
  to={"/admin"} 
  style={{ 
    color: "black",
    textDecoration: "none",
    // padding: "10px",
    // borderRadius: "5px",
    backgroundColor: "#f1f1f1",
    boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
  }}
  activeStyle={{ 
    backgroundColor: "#ddd",
  }}
>
  Admin Page
</Link>






        <br/>
    
        </div> */}
        
            {/* <h1>this is the welcome page</h1> */}
            {
                
<h5 className="text-center">Hi, {user.name}👋</h5>
            }
        </div>
    )
}

export default AdminWelcome
