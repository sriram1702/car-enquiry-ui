import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './Carlist.css';
//to represent a car detail with car name,image and price
const CarDetail = () => {
    const { carid } = useParams();
    console.log(carid);

    const [cardata, cardatachange] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8085/api/v1/cars/${carid}` ).then((res) => {
            return res.json();
        }).then((resp) => {
            cardatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Car Detail</h2>
                </div>
                <div className="card-body"></div>

                {cardata &&
                    <div>
                        <h2>The car name is : <b>{cardata.carname}</b>  ({cardata.id})</h2>
                       
                        <h5>The car image is : <img src={cardata.carimage} alt={cardata.carname} /></h5>
                        <h5>The car price is :<b>${cardata.carprice}</b></h5>
                        <Link className="btn btn-danger" to="/admin">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default CarDetail;