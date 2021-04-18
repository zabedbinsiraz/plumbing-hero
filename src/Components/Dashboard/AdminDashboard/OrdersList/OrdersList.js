import React from 'react';
import AdminSidebar from '../AdminDashboard/AdminSidebar/AdminSidebar';

const OrdersList = () => {
    return (
        <div className="row m-2 p-2">
        <div className="col-md-3">
            <AdminSidebar></AdminSidebar>
        </div>
        <div style={{width:'50%',backgroundColor:'salmon',padding:'20px'}} className="col-md-7">
    
    
        <table className="table table-success table-striped">
                    
                    <thead>
                        <tr>
                            <th scope="col">SL.</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Price</th>
                            <th scope="col">Price</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td><button>delete</button></td>
                        </tr>
                      
                    </tbody>
                </table>
        </div>
    </div>
    );
};

export default OrdersList;