import React,{useState,useEffect} from 'react'
import {  Link,useNavigate,useParams } from "react-router-dom";

 const EditCar = () => {
    const { carid } = useParams();


    //To edit the car details that we created

    // const [cardata, cardatachange] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8085/api/v1/cars/${carid}`).then((res) => {
            return res.json();
        }).then((resp) => {
            // cardatachange(resp);
            idchange(resp.id)
            console.log(resp.id)
            namechange(resp.carname)
            imagechange(resp.carimage)
            pricechange(resp.carprice)
            // isactivechange(resp.isactive)
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    const[id,idchange]=useState("");
    const[carname,namechange]=useState("")
    const[carimage,imagechange]=useState("")
    const[carprice,pricechange]=useState("")
    // const [isactive,isactivechange]=useState(true)


    const navigate=useNavigate();
    const handlesubmit=(e)=>{
        e.preventDefault();
        // console.log({id,name,image,price,isactive})
        const cardata={id,carname,carimage,carprice};
        // const navigate=useNavigate();

        //create a PUT method to edit and update
        fetch(`http://localhost:8085/api/v1/cars/${id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(cardata)
            
              }).then((res)=>{
        alert('saved successfully')
        navigate('/admin')
        console.log(cardata)
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
                            <h2>Edit the car</h2>

                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input   value={id} disabled="disabled" className="form-control"></input>
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
    <div className="form-group"> <span> 
        <button className="btn btn-success" type="submit">save</button></span>

    <span>  <Link to="/admin" className="btn btn-danger">Back</Link></span>
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
export default EditCar;