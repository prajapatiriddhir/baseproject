import React, { useState } from 'react'
import {connect} from 'react-redux'


const Register = () =>{

  const [firstname,setFirstName] = useState('');
  const [lastname,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

const handleSubmit = (e) =>{
  e.preventDefault()
  alert(`${firstname},${lastname},${email},${password}`)
}


  return(
    <>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3 className="h3">Registration Form</h3>

        <div className="form-group">
          <label className="lable">First Name</label>
          <input type="text" placeholder="Enter Name" className="form-control"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}/>
        </div>

        <div className="form-group">
          <label className="lable">Last Name</label>
          <input type="text" placeholder="Enter Name" className="form-control"
          value={lastname}
          onChange={(e)=>setLastName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label className="lable">Email</label>
          <input type="email" placeholder="Enter Email" className="form-control"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
          <label className="lable">Password</label>
          <input type="password" placeholder="Enter Password" className="form-control"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button className="form-control btn-dark">Register</button>
      </form>
    </div>
    </>
  )
}





export default connect()(Register);



