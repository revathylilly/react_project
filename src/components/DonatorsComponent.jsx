
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'


const AdminComponent = () => {
  document.title ="Collector"
  const[data,setDonators] =useState([])
  const [btn, setBtn] = useState(false);
  
  useEffect(()=>{
   
    fetch("api/Pothichoru/getall", {
      method:"GET",
      credentials:"include"

    }).then(response => response.json()).then(data=>{
        setDonators(data.userdataa)
      console.log("get all userdata :", data.userdataa)
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
         
        }}>Here is the list of our Donators </div>
            <hr />
         <div>
         <Button className='btn btn-success' style={{
            backgroundColor:"green",
            color:"white",
            alignItems:"right"
         }} onClick={NotifyCollector} >{btn ? "Notified Collector" : "Notify Collector"} </Button>
    <hr />
    <TableContainer component={Paper}>
             <Table sx={{ minWidth: 500 }} aria-label="simple table" style={{border:"1px solid black", marginTop:"50px"}}>
               <TableHead>
                 <TableRow>
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Name</TableCell>
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Email</TableCell>
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Mobile Number</TableCell>
   
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Address</TableCell>
                   <TableCell align="center" style={{color:"yellow", fontSize:"20px", backgroundColor:"skyblue"}}>Donation Date</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
               {data.map((row) => (
                   <TableRow
                   style={{backgroundColor:row.isAdmin== true? 'lightgreen' : 'pink'}}
                     key={row.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                   >
                     
                     <TableCell align="center">{row.name}</TableCell>
                     <TableCell align="center">{row.email}</TableCell>
                     <TableCell align="center">{row.phoneNumber}</TableCell>
                     <TableCell align="center">{row.address}</TableCell>
                     <TableCell align="center">{row.donationDate}</TableCell>
                     
                     
                     
                   
                   </TableRow>
                   
                 ))}
               </TableBody>
             </Table>
           </TableContainer>
           
       </div>
        </div>
        :
        <div className='waiting-page'>
            <div>Waitingdonator...</div>
        </div>
    }
 </section>
</section>
   

 

  );

  async function NotifyCollector(e){
    e.preventDefault();
    alert(`Notified the collector.`)
    setBtn(!btn);
    
  }
}

export default AdminComponent