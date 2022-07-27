import React, { useState } from "react";


 const Login = () => {
 //step 1 get user input 
 const [password,setPassword] = useState(null)
 const [username,setUsername] = useState(null)
 const handleUsernameChange = (username) =>{ 
    // console.log(username)
    setUsername(username)
 }

 const handleLogin = ()=>{
    
    console.log(username)
    console.log(password)
 }
 const handlePasswordChange = (password) =>{
//   console.log(password)
  setPassword(password)
 }
  return (
   <div> 
   <form>
    <div class="container">
    <label for="uname"><b>Username</b></label>
    <input onChange={(e)=>{handleUsernameChange(e.target.value)}} type="text" placeholder="Enter Username" name="uname" required/>
    
    <label for="psw"><b>Password</b></label>
    <input onChange ={(e)=>{handlePasswordChange(e.target.value)}}type="password" placeholder="Enter Password" name="psw" required/>
        
    <button onClick={handleLogin} type="submit">Login</button>
    <button type="submit">Sign up</button>
   
    </div>

</form>
</div> 
)};


export default Login;