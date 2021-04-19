import React, { useContext, useState } from 'react';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';


const CustomerReview = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [addedReview,setAddedReview] = useState(false);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    
    const onSubmit = data => {
        
        const reviewData = {
            photo:loggedInUser.photo,
            name:data.name,
            email:loggedInUser.email,
            rank:data.rank,
            desc:data.desc
        }
        console.log(reviewData)

        const url =`http://localhost:4444/addReview`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(reviewData)
        })
        .then(res=>{
            console.log(res)
        })

        setAddedReview(true);
       
        
    };

    return (
        <div className="row m-2 p-2">
        <div className="col-md-3">
           <CustomerSidebar></CustomerSidebar>
        </div>
        <div style={{width:'50%',backgroundColor:'salmon',padding:'20px'}} className="col-md-7">
        <form  onSubmit={handleSubmit(onSubmit)}>
               <div className="form-control">
               <div>
                 <label htmlFor="">Your Name</label>
                  <br/>
               <input className="input" type="text" className="form-control" placeholder="Your Full Name" {...register('name')} />
                     <br/>
                 <label htmlFor="">Company's Designation</label>
                  <br/>
               <input className="input" type="text" className="form-control" placeholder="Your Job Post" {...register('rank')} />
                     <br/>
               <label htmlFor="">Description</label>
                 <br/>
               <input className="input" type="text" className="form-control" placeholder="Review description" {...register('desc')} />
                 </div>
                
                 
                
              <div>
                <br/>
               
                
              </div>
               </div>
               <br/>
              <div className="text-center">
              <input className="save-btn btn btn-primary" type="submit" />
              </div>
             </form> 
        </div>
    </div>
    );
};

export default CustomerReview;