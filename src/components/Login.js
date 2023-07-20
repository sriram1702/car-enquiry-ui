// // import React from 'react';
// // import { useAuth0 } from '@auth0/auth0-react';
// // import { Navigate } from 'react-router';
// // import './LoginButton.css';
// // const Login = () => {
// //   const { loginWithRedirect } = useAuth0();

// //   return (
// //     <button    className="btn btn-success"  onClick={() => loginWithRedirect()}>Log In</button>
  
// //   );
// // };

// // export default Login;
// import React, { useState, useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { Navigate,Link } from 'react-router-dom';
// import './LoginButton.css';
// //to create a login and after successfull login ,get the user access token
// const Login = () => {
//   const { loginWithRedirect,isAuthenticated, getAccessTokenSilently } = useAuth0();
//   const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     const getAccessToken = async () => {
//       const token = await getAccessTokenSilently();
//       setAccessToken(token);
//     };
//     getAccessToken();
//   }, [getAccessTokenSilently]);

//   const handleClick = async () => {
//     if(isAuthenticated==true){
//     const url = 'http://localhost:8000/cars/';
//     const response = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     const data = await response.json();
//     console.log(data);
//     console.log(accessToken)
//    } };

//   return (
//     <>
//       {accessToken ? (
//         <button className="btn btn-success" onClick={handleClick} >
//           Get  Access Token
//         </button>
//       ) : (
//         <button className="btn btn-success" onClick={() => loginWithRedirect()}>
//           Log In
//         </button>
//         // </Link>
//         // <button className="btn btn-success" onClick={() => {loginWithRedirect();  handleClick();}}>
       
//   // Log In
// // </button>

//       )}
//     </>
//   );
//       }

// export default Login;
// import React, { useState, useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { Navigate,Link } from 'react-router-dom';
// import './LoginButton.css';

// const Login = () => {
//   const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } = useAuth0();
//   const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     const getAccessToken = async () => {
//       if (isAuthenticated) {
//         const token = await getAccessTokenSilently();
//         setAccessToken(token);
//         console.log(token);
//       }
//     };
//     getAccessToken();
//   }, [getAccessTokenSilently, isAuthenticated]);

//   const handleClick = () => {
//     if (isAuthenticated) {
//       console.log(accessToken);
//     } else {
//       loginWithRedirect();
//     }
//   };

//   return (
//     <>
//       <button className="btn btn-success" onClick={handleClick}>
//         {accessToken ? 'You Logged In' : 'Log In'}
//       </button>
//     </>
//   );
// };

// export default Login;



import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate,Link } from 'react-router-dom';
import './LoginButton.css';

const Login = () => {
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const getAccessToken = async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        setAccessToken(token);
        console.log(token);
      }
    };
    getAccessToken();
  }, [getAccessTokenSilently, isAuthenticated]);

  const handleClick = () => {
    if (accessToken) {
      console.log(accessToken);
    } else {
      loginWithRedirect();
    }
  };
 
  return (
    <>
      {accessToken ? null : (
        <button className="btn btn-success" onClick={handleClick}>
          Log In
        </button>
      )}
    </>
  );
};

export default Login;
