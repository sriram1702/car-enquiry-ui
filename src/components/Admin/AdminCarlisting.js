import React, { useState, useEffect } from 'react';
import './Carlist.css';

import { Link, useNavigate } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
//To list all cars which includes all the CRUD Operation
const AdminCarlisting = () => {
  const [cardata, cardatachange] = useState(null);
  const navigate = useNavigate();


  const LoadDetail = (id) => {
    navigate(`/cardetail/${id}`);

  };
  const LoadEdit = (id) => {
    navigate('/editcar/' + id);
  };
  //To delete a Car detail
  const Removefunction = (id) => {
    if (window.confirm('Do you want to remove?')) {
      fetch(`http://localhost:8085/api/v1/cars/${id}`, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(cardata),
      })
        .then((res) => {
          alert('Removed successfully');
          window.location.reload();
          navigate('/admin');
          console.log(cardata);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

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
  // if(isLoading){
  //   return <div>Loading</div>
  // }
//to show the data in UI

  return (
    <div class="container">
      <h1>Welocme to admin page</h1>
      <div class="row mb-5">
        <div className="divbtn">
          <Link to="/createcar" className="btn btn-success">
            Add New(+)
          </Link>
        </div>
        {cardata &&
          cardata.map((car) => (
            <div class="col-md-4">
              <div class="card-center">
                <img src={car.carimage} alt={car.carname} />
                <div class="card-body">
                  <h5 class="card-title">Car Name:{car.carname}</h5>
                  {/* <h5 class="card-title">Car id:{car.id}</h5> */}
                  <h5 class="card-text">Car Price:${car.carprice}</h5>
                  <a onClick={() => LoadEdit(car.id)} class="btn btn-sm btn-success">
                    Edit
                  </a>
                <span>  <a onClick={() => Removefunction(car.id)} class="btn btn-sm btn-danger">
                    Remove
                  </a> </span>
                 <span> <a onClick={() => LoadDetail(car.id)} class="btn btn-sm btn-primary">
                    Details
                  </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminCarlisting;
