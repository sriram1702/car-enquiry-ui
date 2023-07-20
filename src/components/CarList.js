
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";

import AdminCarlisting from './components/AdminCarlisting';

import UserCarlisting from './components/UserCarlisting';
import CreateCar from './components/CreateCar';
import CarDetail from './components/CarDetail';
import EditCar from './components/EditCar';
import CarList from './components/CarList';

// import CarDataService from './CarDataService'
// import data from './data.js'

function CarList() {
   
        
     
      
  const { isAuthenticated, user } = useAuth0();
  // const [cars, setCars] = useState(data);
  // Function to add a new car
 

  if (!isAuthenticated) {
    return <div className="text-center">Please log in to see the car list.</div>;
  }

  if (user.email.includes('@srec.ac.in')) {
    // Show component for CRUD operations.
    return <div>
        <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<AdminCarlisting />}></Route>
          <Route path='/user' element={<UserCarlisting />}></Route>

          <Route path='/createcar' element={<CreateCar/>}></Route>
          <Route path='/cardetail/:carid' element={<CarDetail/>}></Route>
          <Route path='/editcar/:carid' element={<EditCar/>}></Route>



     
      </Routes>
      </BrowserRouter>
          
        </div>
        // Component for CRUD operations.</div>;
  } else {
    // Show component for regular users.
    return  <div>
          {/* <Route path='/user' element={<UserCarlisting />}></Route> */}

   
  </div>
        
        
  }
}

export default CarList;

