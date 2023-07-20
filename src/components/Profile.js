import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './profile.css'
//to show user details
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  
  }

  return (
    isAuthenticated && (
      <div>
         <div class="container">
      <h1 >Welocme to Profile page</h1>
      <div class="row mb-5">
      <div class="col-md-4">
              <div class="card-center">
              <img src={user.picture} alt={user.name} />
                <div class="card-body">
                  
                  <h5 class="card-text"> Email:{user.email}</h5>
                  <h5 class="card-text">Nick Name:{user.nickname}</h5>
                  
                  </div>
        </div>
        </div>
        </div>
        
     </div>


      </div>
    )
  );
};

export default Profile;