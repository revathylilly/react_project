import { MDBBtn, MDBCheckbox, MDBContainer, MDBIcon, MDBInput } from 'mdb-react-ui-kit'
import { useEffect } from 'react'
//import React from 'react'

const UpdateComponent = () => {
  
  document.title ="Update"
  useEffect(()=>{
    const user = localStorage.getItem("user")
    // console.log("update "+user)
    // if(user){
    //   document.location ="/update"
    // }
  },[])
  return (
    <form action="#" className='update' onSubmit={UpdateHandler} style={{backgroundColor:"skyblue"}}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >
      <div style={{
           fontSize:"30px",
           fontWeight:"600px",
           backgroundImage:"linear-gradient(to left, #553c9a, #b393d3)",
           color:"transparent",
           backgroundClip:"text",
           WebkitBackgroundClip:"text"
         
        }}>Update Your Details  </div>
        <hr />
      <MDBInput wrapperClass='mb-4' label='Name' id='name' name='Name'  type='text' required/>
      <h6>Please Enter the email registered with POTHICHORU</h6>
<MDBInput wrapperClass='mb-4' label='Email address' id='email' name='Email'  type='email' required/>
<MDBInput wrapperClass='mb-4' label='Username' id='username' name='UserName'  type='text' required/>
<MDBInput wrapperClass='mb-4' label='Phone Number' id='phone' name='PhoneNumber'  type='text' required/>
<MDBInput wrapperClass='mb-4' label='Address' id='address' name='Address'  type='text' required/>
<MDBInput wrapperClass='mb-4' label='Donation Date' id='donationdate' name='DonationDate'  type='date' required/>




<MDBBtn className="update btn" value="update" type='submit'>Update</MDBBtn>

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
  async function UpdateHandler(e) {
   
    e.preventDefault()
    const form_ = e.target, submitter = document.querySelector("MDBInput.update")
    const formData = new FormData(form_, submitter), dataToSend ={}
      for(const [key,value] of formData){
        dataToSend[key]= value
      
    }
    //console.log(dataToSend.Donationdate)
  // const newUserName = dataToSend.Email

    const response = await fetch("api/Pothichoru/update", {
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
 alert(`Successfully updated your details. Thank you. Please Login.`)
  document.location="/login"
}
else{
    alert(`Please check the email id and try again.`)
    document.location ="/update"
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
console.log("update error", data)
}
}

export default UpdateComponent