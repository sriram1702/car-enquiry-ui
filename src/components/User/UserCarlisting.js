import React, { useState, useEffect } from 'react';
import './Carlist.css';
//to display the car details
const UserCarlisting = () => {
  const [cardata, cardatachange] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8085/api/v1/cars')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        cardatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div class="container">
      <h1 >Welocme to User page</h1>
      <div class="row mb-5">
        {cardata &&
          cardata.map((car) => (
            <div class="col-md-4">
              <div class="card-center">
                <img  src={car.carimage} alt={car.carname} />
                <div class="card-body">
                  <h5 class="card-title">Car Name:{car.carname}</h5>
                  <h5 class="card-text">Car Price:${car.carprice}</h5>
                  {/* <a href="#" class="btn btn-sm btn-success">
                    Edit
                  </a>
                  <a href="#" class="btn btn-sm btn-danger">
                    Remove
                  </a>
                  <a href="#" class="btn btn-sm btn-primary">
                    Details
                  </a> */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserCarlisting;
