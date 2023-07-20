import React, { useState } from 'react'
import './Carlist.css';
import { Link, useNavigate } from 'react-router-dom';

//to create a car, we need name,image and price of the car
 const CreateCar = () => {
     const[id,idchange]=useState("");
     const[carname,namechange]=useState("")
     const[carimage,imagechange]=useState("")
     const[carprice,pricechange]=useState("")
    //  const [isactive,isactivechange]=useState(true)
     const navigate=useNavigate();

      const handlesubmit=(e)=>{
e.preventDefault();
// console.log({id,name,image,price,isactive})
const cardata={carname,carimage,carprice};
// const navigate=useNavigate();
//Create POST Method to create Car information
fetch("http://localhost:8085/api/v1/cars/createcar",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(cardata)
      }).then((res)=>{
alert('saved successfully')
navigate('/admin')
}).catch((err)=>{
    console.log(err.message)
})
      }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card">
                        <div className="card-title">
                            <h2>Create Car</h2>

                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        {/* <label>ID</label>
                                        <input   value={id} disabled="disabled" className="form-control"></input> */}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                <label>Name</label>
                                        <input  required value={carname} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="col-lg-12">
                                <label>Image[URL]</label>
                                        <input required  value={carimage} onChange={e=>imagechange(e.target.value)}className="form-control"></input>
                                </div>
                                <div className="col-lg-12">
                                <label>Price</label>
                                        <input  required value={carprice} onChange={e=>pricechange(e.target.value)}className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-check">
                                    {/* <input checked={isactive} onChange={e=>isactivechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                    <label className="form-check-label">Is Active</label> */}
                                </div>
                            </div>
<div className="col-lg-12">
    <div className="form-group">
        <button className="btn btn-success" type="submit">save</button>
        <Link to="/" className="btn btn-danger">Back</Link>
    </div>
</div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateCar;