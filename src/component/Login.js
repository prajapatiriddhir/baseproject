import React, { useState } from 'react'
import {connect} from 'react-redux'


const Login = () =>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');



   const handleSubmit = async (e) =>{
       console.log("click");
    }
    return (
     <>
     <div className="container">
        <form onSubmit={handleSubmit}>
            <h3 className="h3">Login Form</h3>
            <div className="form-group">
                <label className="lable" >Email</label>
                <input type="email" className="form-control" placeholder="Enter Name"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
                <label className="lable">Password</label>
                <input type="password" className="form-control" placeholder="Enter Password"
                value={password}
                onChange={(e)=>setPassword(e.target.password)}/>
            </div>

            <button type="submit" class="form-control btn-dark">Login</button>
        </form>
        </div>
     </>
    )
}



export default connect()( Login);
