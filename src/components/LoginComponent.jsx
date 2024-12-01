import { MDBBtn, MDBCheckbox, MDBContainer, MDBIcon, MDBInput } from 'mdb-react-ui-kit'
import { useEffect } from 'react'
//import React from 'react'

const LoginComponent = () => {
  document.title ="Login"
  useEffect(()=>{
    const user = localStorage.getItem("user")
    if(user){
      console.log("login"+user)
     
      document.location ="/"
    }
    
  },[])
  return (
    <form action="#" className='login' onSubmit={LoginHandler} style={{backgroundColor:"skyblue"}}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >

<MDBInput wrapperClass='mb-4' label='Email address' id='email' name='Email'  type='email' required/>
<MDBInput wrapperClass='mb-4' label='Password' id='password'  name='Password' type='password' required/>

<div className="d-flex justify-content-between mx-3 mb-4">
  
  <a href="!#">Forgot password?</a>
</div>

<MDBBtn className="login btn" value="Login" type='submit'>Login</MDBBtn>

<div className="text-center">
  <p>Not a member? <a href="/register">SignUp</a></p>
  <p>or sign up with:</p>

  <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='facebook-f' size="sm"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='twitter' size="sm"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='google' size="sm"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='github' size="sm"/>
    </MDBBtn>

  </div>
</div>

</MDBContainer>
    </form>
  );
  async function LoginHandler(e) {
    
    e.preventDefault()
    const form_ = e.target, submitter = document.querySelector("input.login")
    const formData = new FormData(form_, submitter), dataToSend ={}
      for(const [key,value] of formData){
        dataToSend[key]= value
      
    }
    if(dataToSend.Remember ==="on"){
      dataToSend.Remember = true
    }
    const response = await fetch("api/Pothichoru/login", {
      method: "POST",
      credentials:"include",
      body:JSON.stringify(dataToSend),
      headers:{
        "content-type":"Application/json",
        "Accept":"application/json"
      }
    })
    const data = await response.json()
if(response.ok){
  localStorage.setItem("user",dataToSend.Email)
  console.log(dataToSend.Email)
  alert(`Successfull Login`)
  document.location="/"

} 
else{
  alert(`Please check your credentials and try again.`)
}
const messageEl = document.querySelector(".message")
if(data.message){
  messageEl.innerHTML = data.message
  
} 
else{
  messageEl.innerHTML ="Something went wrong, please try again."
  
}
console.log("login error", data)
}
}

export default LoginComponent