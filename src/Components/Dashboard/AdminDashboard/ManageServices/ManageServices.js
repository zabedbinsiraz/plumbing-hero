import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const ManageServices = () => {

    const [services,setServices] = useState([]);
    

    

    const loadProducts = () => {
        fetch('http://localhost:4444/services')
        .then(res=>res.json())
        .then(data =>{
          console.log(data)
          setServices(data)
        })
    }
    loadProducts();
    const handleDelete = (id) => {
        fetch(`http://localhost:4444/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    loadProducts();
                }
            })

    }

    return (
        <div className="row m-2 p-2">
            <div className="col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div style={{ width: '50%', backgroundColor: 'salmon', padding: '20px' }} className="col-md-7">

                

                <table className="table table-success table-striped">
                    
                        <thead>
                            <tr>
                                <th scope="col">SL.</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                              services.map(service => 
                                <tr>
                                <th scope="row">1</th>
                                <td>{service.productName}</td>
                                <td>{service.price}</td>
                                <td><button onClick={() => handleDelete(service._id)} className="btn btn-primary">delete</button></td>
                            </tr>)
                          }
                          
                        </tbody>
                    </table>
               

            </div>
        </div>
    );
};

export default ManageServices;