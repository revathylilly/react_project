import { MDBBtn, MDBCheckbox, MDBContainer, MDBIcon, MDBInput } from 'mdb-react-ui-kit'
import { useEffect } from 'react'
//import React from 'react'

const RegisterCollectorComponent = () => {
  
  document.title ="RegisterCollector"
  useEffect(()=>{
    const user = localStorage.getItem("user")
    console.log("signupcollector "+user)
   
  },[])
  return (
    <form action="#" className='registercollector' onSubmit={RegisterCollectorHandler} style={{backgroundColor:"skyblue"}}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >
      <MDBInput wrapperClass='mb-4' label='Name' id='name' name='Name'  type='text' required/>
<MDBInput wrapperClass='mb-4' label='Email address' id='email' name='Email'  type='email' required/>
<MDBInput wrapperClass='mb-4' label='Username' id='username' name='UserName'  type='text' required/>
<MDBInput wrapperClass='mb-4' label='Phone Number' id='phone' name='Phone'  type='text' required/>
<MDBInput wrapperClass='mb-4' label='District' id='district' name='District' list="districts"   required/>
<datalist id="districts">
  <option>Thiruvananthapuram</option>
  <option>Kollam</option>
  <option>Alappuzha</option>
  <option>Pathanamthitta</option>
  <option>Kottayam</option>
  <option>Idukki</option>
  <option>Ernakulam</option>
  <option>Thrissur</option>
  <option>Palakkad</option>
  <option>Malappuram</option>
  <option>Kozhikode</option>
  <option>Wayanad</option>
  <option>Kannur</option>
  <option>Kasaragod</option>
</datalist>
<MDBInput wrapperClass='mb-4' label='Collection Area' id='collectionarea' name='CollectionArea' list="area"   required/>
<datalist id="area">
  <option>Area1</option>
  <option>Area2</option>
  <option>Area3</option>
  <option>Area4</option>
  <option>Area5</option>
  <option>Area6</option>
  <option>Area7</option>
  <option>Area8</option>
  <option>Area9</option>
  <option>Area10</option>
</datalist>




<MDBBtn className="signup btn" value="signup" type='submit'>Add</MDBBtn>

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
  async function RegisterCollectorHandler(e) {
    console.log("signup2")
    e.preventDefault()
    const form_ = e.target, submitter = document.querySelector("MDBInput.signup")
    const formData = new FormData(form_, submitter), dataToSend ={}
      for(const [key,value] of formData){
        dataToSend[key]= value
      
    }
    //console.log(dataToSend.Donationdate)
  // const newUserName = dataToSend.Email

    const response = await fetch("api/Pothichoru/registercollector", {
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
 alert(`Successfully registered the Collector.`)
  document.location="/"

} 
const messageEl = document.querySelector(".message")
if(data.message){
  messageEl.innerHTML =data.message
} 

console.log("login error", data)
}
}

export default RegisterCollectorComponent