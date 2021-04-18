import React, { useState } from 'react';
import logo from '../../logo.svg';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  
 const [loggedInUser, setLoggedInUser] = useState({});
    

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName,email} = result.user;
    const newUser = {
        name: displayName,
        email: email
    }
    
    setLoggedInUser(newUser);
    setUserToken();
    
   
  }).catch((error) => {  
    const errorMessage = error.message;
    console.log(errorMessage)
  });
console.log('clicked')
    }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          sessionStorage.setItem('token', idToken);
        }).catch(function(error) {
          // Handle error
        });
      }

    return (
        <div className="container d-flex justify-content-center m-5 p-5">
           
            <div className="row text-center">
                <div className="mb-5 ms-4">
                    {
                        loggedInUser.email? <h2>{loggedInUser.name}</h2>
                        : <h2>Login</h2>
                    }
                </div>
                <div className="d-flex justify-content-center">
                   <div>
                       <img style={{height:'50px'}} src={logo} alt=""/>
                   </div>
                   <div>
                       <h4>PLUMBING<br/>HERO</h4>
                   </div>
                </div>
                
                <div 
                className=" text-center">
                        <button onClick={()=>{handleGoogleSignIn()}} className="btn-primary btn ms-5 mt-5" style={{height:'70px',width:'400px',fontSize:'36px'}}>
                            Continue With Google
                        </button>
                </div>

            </div>
            
        </div>
    );
};

export default Login;