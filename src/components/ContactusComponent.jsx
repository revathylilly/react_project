import { MDBBtn, MDBCheckbox, MDBInput, MDBTextArea } from 'mdb-react-ui-kit'
import React from 'react'

const ContactusComponent = () => {
  return (
    <form  id='form' action="#" className='register' onSubmit={RegisterHandler}  style={{ maxWidth:"600px",margin:"0 auto",padding:"20px", backgroundColor:"skyblue", borderRadius:"8px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)" }}>
      <h2>Contact Us</h2>

      <MDBInput label='Name'  id='name' name='Name' v-model='name' wrapperClass='mb-4' required />

      <MDBInput type='email' label='Email address' v-model='email'   id='email' name='Email' wrapperClass='mb-4' required />
      <MDBInput wrapperClass='mb-4' label='Phone Number' id='phone' name='PhoneNumber'  type='text' required/>
      <MDBInput label='Subject' v-model='subject' id='subject' name='Subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' id='message' name='message' />

  

      <MDBBtn color='primary' block className='my-4' value="signup" type='submit'>
        Send
      </MDBBtn>
    </form>
  );
  async function RegisterHandler(e) {
   
    e.preventDefault()
    const form_ = e.target, submitter = document.querySelector("MDBInput.signup")
    const formData = new FormData(form_, submitter), dataToSend ={}
      for(const [key,value] of formData){
        dataToSend[key]= value
      
    }
    //console.log(dataToSend.Donationdate)
  // const newUserName = dataToSend.Email

    const response = await fetch("api/Pothichoru/registerenquiries", {
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
 alert(`Thank you for contacting us. We will get back to you soon.`)
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

export default ContactusComponent