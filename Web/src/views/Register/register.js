import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Login = (props) => {
    const submitLogin = ()=>{
        let object={
            email:document.getElementById("email").value,
            password:document.getElementById("password").value
        }
        fetch('http://localhost:5000/api/User/Login'
        ,{
          method:'POST',
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
          body:JSON.stringify(object)
        }
        )
          .then(function(response){
            console.log(response)
            if(response.status==200){
                return response.json();
            }
          })
          .then(function(myJson) {
              if(myJson!=undefined){
                props.history.push("/promotions");
              }else{
                  alert("user not found");
              }
          });
         // props.history.push("/promotions");
    }
    const redirectLogin = () => {
        // window.location.href = "promotions"
     
    }
    return (
        <>
        <div className="c-app c-default-layout flex-row align-items-center">
            <div className="container">
                <div className="justify-content-center row">
                    <div className="col-md-8">
                        <div className="card-group">
                            <div className="p-4 card">
                                <div className="card-body">
                                    <form className="">
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                <FontAwesomeIcon icon="envelope"/>
                                                </div>
                                            </div>
                                            <input className="form-control" id="email" type="text" placeholder="Email" />
                                        </div>
                                        <div className="input-group mb-4">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                    <FontAwesomeIcon icon="lock"/> </div>
                                                </div>
                                                <input className="form-control" type="password" id="password" placeholder="Password"/>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <button className="px-4 btn btn-primary" onClick={submitLogin} type="button">Login</button>
                                                </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <div className="text-white bg-primary py-5 d-md-down-none card" style={{width: '44%'}}> */}
                            <div className="text-white bg-primary py-5 d-md-down-none card" >
                                <div className="text-center card-body">
                                <button className="px-4 btn btn-primary" onClick={redirectLogin()} type="button">Sign Up</button>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Register