import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const OrdersList = () => {

    const [orders,setOrders] = useState([]);

  
 
 

    useEffect(() =>{
        fetch('https://infinite-hamlet-09689.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data =>{
          console.log(data)
          setOrders(data)
        })
    },[])


    return (
       
        <div style={{backgroundColor:'salmon',padding:'20px'}} className="col-md-9">
    
    
        <table className="table table-success table-striped">
                    
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Pay With</th>
                            <th scope="col">Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                      {
                          orders.map(order => 
                         <tr>
                            <th scope="row">{order.buyerName}</th>
                            <td>{order.buyerEmail}</td>
                            <td>{order.productName}</td>
                            <td>card</td>
                            <td>On going</td>
                         
                        </tr> )
                      }
                      
                    </tbody>
                </table>
        </div>
    
    );
};

export default OrdersList;