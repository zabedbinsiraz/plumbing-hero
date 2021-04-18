import React, { useState } from 'react';
import ProcessPayment from '../../../PaymentProcess/ProcessPayment';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';

const Book = () => {
    const [customer,setCustomer] = useState(null);
    const handleCustomerInfo = (e) =>{
         e.target.name = e.target.value;
         e.target.email = e.target.value;
         e.target.productName = e.target.value;
         const newCustomer = {
             name:e.target.name,
             email:e.target.email,
             product:e.target.productName
         }
         setCustomer(newCustomer);
        
    }

    const handlePaymentSuccess = paymentId => {
        const customerDetails = {...customer}
        customer.paymentIdNo = paymentId;
        setCustomer(customerDetails)
        console.log(customer)
    }
    return (
        <div className="row m-2 p-2">
            <div className="col-md-3">
                <CustomerSidebar></CustomerSidebar>
            </div>
            <div style={{width:'50%',backgroundColor:'salmon',padding:'20px'}} className="col-md-7">


                <form>
                    <div  className="mb-3">
                        
                        <input onBlur={handleCustomerInfo} type="text" className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div  className="mb-3">
                        
                        <input onBlur={handleCustomerInfo} type="text" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div  className="mb-3">
                        
                        <input onBlur={handleCustomerInfo} type="text" className="form-control" name="productName" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                   
                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                </form>


                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>
        </div>
    );
};

export default Book;