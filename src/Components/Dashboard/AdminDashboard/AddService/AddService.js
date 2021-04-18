import AdminSidebar from '../AdminDashboard/AdminSidebar/AdminSidebar';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [addedService,setAddedService] = useState(false);

    const onSubmit = data => {
        const serviceData = {
            productName:data.name,
            imageURL:imageURL,
            desc:data.desc
        }
        console.log(serviceData)
        const url =`https://localhost:4444/addService`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(serviceData)
        })
        .then(res=>{
            console.log(res)
        })

        setAddedService(true);
       
        
    };



    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'b437b2988a9a7d177ebe83d13b4dc437')
        imageData.append('image', event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(response =>{
            console.log(response.data.data.display_url)
            setImageURL(response.data.data.display_url)
        })
        .catch(error=>{
            console.log(error)
        })

    }


    return (
        <div className="row m-2 p-2">
        <div className="col-md-3">
            <AdminSidebar></AdminSidebar>
        </div>
        <div style={{width:'50%',backgroundColor:'salmon',padding:'20px'}} className="col-md-7">
    
             
        <div className="form-container">
            <h3>Add Service</h3>
           {
               addedService? <h3>New Service added Successfully</h3>
               : <form  onSubmit={handleSubmit(onSubmit)}>
               <div className="form-control">
               <div>
                 <label htmlFor="">Service Title</label>
                  <br/>
               <input className="input" type="text" className="form-control" placeholder="Add new service" {...register('name')} />
                     <br/>
               <label htmlFor="">Description</label>
                 <br/>
               <input className="input" type="text" className="form-control" placeholder="Service description" {...register('desc')} />
                 </div>
                
                 
                
              <div>
                <br/>
               <label htmlFor="">Add Photo</label>
               <br/>
               <input className="input"  className="form-control" type="file" onChange={handleImageUpload} />
                
              </div>
               </div>
               <br/>
              <div className="text-center">
              <input className="save-btn btn btn-primary" type="submit" />
              </div>
             </form> 
           }
        </div>


        </div>
    </div>
    );
};

export default AddService;


   