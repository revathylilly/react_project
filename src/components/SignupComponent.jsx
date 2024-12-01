import { MDBBtn, MDBCheckbox, MDBContainer, MDBIcon, MDBInput } from 'mdb-react-ui-kit'
import { useEffect } from 'react'
//import React from 'react'

const SignupComponent = () => {
  
  document.title ="Register"
  useEffect(()=>{
    const user = localStorage.getItem("user")
    console.log("signup "+user)
    if(user){
      document.location ="/"
    }
  },[])
  return (
    <form action="#" className='register' onSubmit={RegisterHandler} style={{backgroundColor:"skyblue"}}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >
      <MDBInput wrapperClass='mb-4' label='Name' id='name' name='Name'  type='text' required/>
<MDBInput wrapperClass='mb-4' label='Email address' id='email' name='Email'  type='email' required/>
<MDBInput wrapperClass='mb-4' label='Username' id='username' name='UserName'  type='text' required/>
<MDBInput wrapperClass='mb-4' label='Phone Number' id='phone' name='PhoneNumber'  type='text' required/>
<MDBInput wrapperClass='mb-4' label='Address' id='address' name='Address'  type='text' required/>
<MDBInput wrapperClass='mb-4' label='Donation Date' id='donationdate' name='DonationDate'  type='date' required/>
<MDBInput wrapperClass='mb-4' label='Password' id='password'  name='PasswordHash' type='password' required/>



<MDBBtn className="signup btn" value="signup" type='submit'>SignUp</MDBBtn>

<div className="text-center">
 
 

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
  async function RegisterHandler(e) {
    console.log("signup2")
    e.preventDefault()
    const form_ = e.target, submitter = document.querySelector("MDBInput.signup")
    const formData = new FormData(form_, submitter), dataToSend ={}
      for(const [key,value] of formData){
        dataToSend[key]= value
      
    }
    //console.log(dataToSend.Donationdate)
  // const newUserName = dataToSend.Email

    const response = await fetch("api/Pothichoru/register", {
      method: "POST",
      credentials:"include",
      body:JSON.stringify(dataToSend),
      headers:{
        "content-type":"Application/json",
        "Accept":"application/json"
      }
    })
    const data = await response.json()
    console.log(data.message)
if(response.ok){
 alert(`Successfully registed with Pothichoru. Thank you. Please Login.`)
  document.location="/login"

} 
else{
  alert(`Something went wrong, please try again.`)
}
const messageEl = document.querySelector(".message")
if(data.message){
  messageEl.innerHTML =data.message
} 
else{
  let errorMessages = "<div>Attention please:</div><div class='normal>"
  data.errors.forEach(error => {
    errorMessages += error.description + " "
    
  });
  errorMessages +="<div>";
  messageEl.innerHTML = errorMessages
}
console.log("login error", data)
}
}

export default SignupComponent