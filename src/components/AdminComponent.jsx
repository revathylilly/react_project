
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'


const AdminComponent = () => {
  document.title ="Collector"
  const[data,setPartners] =useState([])
  
  useEffect(()=>{
   
    fetch("api/Pothichoru/collector", {
      method:"GET",
      credentials:"include"

    }).then(response => response.json()).then(data =>{
        setPartners(data.trustedPartners)
      console.log("Trusted Partners:", data.trustedPartners)
    }).catch(error =>{
      console.log("error home page :" , error)
    });
  },[]);
  return (
   
      
<section className='admin-page page'>
  <header>
  <h1 style={{
           fontSize:"70px",
           fontWeight:"600px",
           backgroundImage:"linear-gradient(to left, #553c9a, #b393d3)",
           color:"transparent",
           backgroundClip:"text",
           WebkitBackgroundClip:"text",
           textAlign:"center"
        }}>Our Collectors</h1>

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
         
        }}>Here is the list of our Collectors </div>
           <div>
    
    
    <TableContainer component={Paper}>
             <Table sx={{ minWidth: 500 }} aria-label="simple table" style={{border:"1px solid black", marginTop:"50px"}}>
               <TableHead>
                 <TableRow>
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Name</TableCell>
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Email</TableCell>
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Mobile Number</TableCell>
   
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>District</TableCell>
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Collection Area</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
               {data.map((row) => (
                   <TableRow
                   style={{backgroundColor:'pink'}}
                     key={row.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                   >
                     
                     <TableCell align="center">{row.name}</TableCell>
                     <TableCell align="center">{row.email}</TableCell>
                     <TableCell align="center">{row.phone}</TableCell>
                     <TableCell align="center">{row.district}</TableCell>
                     <TableCell align="center">{row.collectionArea}</TableCell>
                   
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </TableContainer>
       </div>
        </div>
        :
        <div className='waiting-page'>
            <div>WaitingCollectors...</div>
        </div>
    }
 </section>
</section>
   

 

  );
}

export default AdminComponent