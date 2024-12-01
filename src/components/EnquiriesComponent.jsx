
import { useEffect, useState } from 'react'

import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'


const EnquiriesComponent = () => {
  document.title ="Enquiries"
  const[data,setEnquiries] =useState([])
  
  
  useEffect(()=>{
   
    fetch("api/Pothichoru/getallEnquiries", {
      method:"GET",
      credentials:"include"

    }).then(response => response.json()).then(data=>{
        setEnquiries(data.userdataa)
      console.log("get all Enquiries :", data.userdataa)
    }).catch(error =>{
      console.log("error donators page :" , error)
    });
  },[]);
  return (
   
      
<section className='donators-page page'>
  <header>
  <h1 style={{
           fontSize:"70px",
           fontWeight:"600px",
           backgroundImage:"linear-gradient(to left, #553c9a, #b393d3)",
           color:"transparent",
           backgroundClip:"text",
           WebkitBackgroundClip:"text",
           textAlign:"center"
        }}>Our Donators</h1>

  </header>
 <section>
    {
        data ?
        <div>
            <div style={{
           fontSize:"30px",
           fontWeight:"600px",
           backgroundImage:"linear-gradient(to left, #553c9a, #b393d3)",
           color:"transparent",
           backgroundClip:"text",
           WebkitBackgroundClip:"text"
         
        }}>Here is the list of Enquiries </div>
            <hr />
         <div>
        
    <hr />
    <TableContainer component={Paper}>
             <Table sx={{ minWidth: 500 }} aria-label="simple table" style={{border:"1px solid black", marginTop:"50px"}}>
               <TableHead>
                 <TableRow>
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Name</TableCell>
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Email</TableCell>
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Mobile Number</TableCell>
   
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Subject</TableCell>
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Message</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
               {data.map((row) => (
                   <TableRow                 
                     key={row.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                   >
                     
                     <TableCell align="center">{row.name}</TableCell>
                     <TableCell align="center">{row.email}</TableCell>
                     <TableCell align="center">{row.phoneNumber}</TableCell>
                     <TableCell align="center">{row.subject}</TableCell>
                     <TableCell align="center">{row.message}</TableCell>
                     
                     
                     
                   
                   </TableRow>
                   
                 ))}
               </TableBody>
             </Table>
           </TableContainer>
           
       </div>
        </div>
        :
        <div className='waiting-page'>
            <div>Waiting Enquiries...</div>
        </div>
    }
 </section>
</section>
   

 

  );

  
}

export default EnquiriesComponent