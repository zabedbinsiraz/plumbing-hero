import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
       
        console.log(data.email)
        const admin = data.email;

       

        fetch('http://localhost:4444/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        
    };

   
    return (
        <div className="row m-2 p-2">
        <div className="col-md-3">
            <AdminSidebar></AdminSidebar>
        </div>
        <div style={{width:'50%',backgroundColor:'salmon',padding:'20px'}} className="col-md-7">
    
        <form  onSubmit={handleSubmit(onSubmit)}>
               <div className="form-control">
               <div>
                 <label htmlFor="">E-mail</label>
                  <br/>
               <input className="input" type="email" className="form-control" placeholder="valid email address" {...register('email')} />
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

export default MakeAdmin;