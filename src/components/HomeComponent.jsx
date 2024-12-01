import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, CardMedia, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DonatorsComponent from './DonatorsComponent';
//import React from 'react'
import background from '/src/images/back 4.jpg'
import back2 from '/src/images/back2.jpg'






const HomeComponent = () => {
 
  document.title ="Welcome"
  const [isLoggedin, setIsLoggedin] = useState(false);
  
  const[userInfo,setUserInfo] =useState({})
  var daata = false;
  
  useEffect(() => {
    const user = localStorage.getItem("user");
    fetch("api/Pothichoru/home/" + user, {
        method: "GET",
        credentials: "include"
    }).then(response => response.json()).then(data => {
        setUserInfo(data.userInfo);
       daata = true;
        console.log("data"+daata);
        console.log("user info: ", data.userInfo);
    }).catch(error => {
        console.log("Error home page: ", error);
    });
}, []);

  return ( 
   <div className='HomeComponent' style={{
    backgroundImage:`url(${background})`,
    backgroundSize:"100% 100%",
    backgroundRepeat:"no-repeat",
    width:"1270px",
    height:"2100%"
   }}>
      
<section className='page'>
  <header>
  <h1 style={{
           fontSize:"70px",
           fontWeight:"600px",
           backgroundImage:"linear-gradient(to left, #553c9a, #b393d3)",
           color:"White",
           backgroundClip:"text",
           WebkitBackgroundClip:"text",
           textAlign:"center"
        }}> POTHICHORU</h1>
        
       
        

  </header>
  
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/src/images/logo.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Welcome
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Starting of an endeavour that helps a lot of people to be a part of good deeds and there will be several people benefit from that. Please join us.
        </Typography>
      </CardContent>
      <CardActions>
    
      </CardActions>
    </Card>

    { 
       userInfo.email ? <div> 
        <div style={{
           fontSize:"30px",
           fontWeight:"600px",
           backgroundImage:"linear-gradient(to left, #553c9a, #b393d3)",
           color:"transparent",
           backgroundClip:"text",
           WebkitBackgroundClip:"text"
         
        }}>Welcome to POTHICHORU </div>  
       <h5 style={{
      fontSize:"30px",
      fontWeight:"600px",
      backgroundImage:"linear-gradient(to left, #553c9a, #b393d3)",
      color:"transparent",
      backgroundClip:"text",
      WebkitBackgroundClip:"text",
      textAlign:"center"}}>Your Details </h5>
       <TableContainer>
    <Table sx={{ minWidth: 500 }} aria-label="simple table" style={{border:"1px solid black", marginTop:"50px"}}>
      <TableHead>
        <TableRow>
          <TableCell align="center" style={{color:"blue", fontSize:"20px", backgroundColor:"skyblue"}}>Name</TableCell>
          <TableCell align="center" style={{color:"blue", fontSize:"20px", backgroundColor:"skyblue"}}>Email</TableCell>
          <TableCell align="center" style={{color:"blue", fontSize:"20px", backgroundColor:"skyblue"}}>MobileNumber</TableCell>
          <TableCell align="center" style={{color:"blue", fontSize:"20px", backgroundColor:"skyblue"}}>Created Date</TableCell>
          <TableCell align="center" style={{color:"blue", fontSize:"20px", backgroundColor:"skyblue"}}>Address</TableCell>
          <TableCell align="center" style={{color:"blue", fontSize:"20px", backgroundColor:"skyblue"}}>Donation Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      <TableRow>
            
            <TableCell align="center" style={{color:"black", fontSize:"18px", backgroundColor:"skyblue"}}>{userInfo.name}</TableCell>
            <TableCell align="center" style={{color:"black", fontSize:"18px", backgroundColor:"skyblue"}}>{userInfo.email}</TableCell>
            <TableCell align="center" style={{color:"black", fontSize:"18px", backgroundColor:"skyblue"}}>{userInfo.phoneNumber}</TableCell>
            <TableCell align="center" style={{color:"black", fontSize:"18px", backgroundColor:"skyblue"}}>{userInfo.createdDate }</TableCell>
            <TableCell align="center" style={{color:"black", fontSize:"18px", backgroundColor:"skyblue"}}>{userInfo.address}</TableCell>
            <TableCell align="center" style={{color:"black", fontSize:"18px", backgroundColor:"skyblue"}}>{userInfo.donationDate}</TableCell>                             
          </TableRow>             
      </TableBody>
    </Table>         
  </TableContainer>
  
  <hr />
  {userInfo.isAdmin ? ( <div><Link to={'/donators'}><button className='btn btn-success' >Donator Details</button></Link> <hr /><Link to={'/getenquiries'}><button className='btn btn-success' >Enquiriess</button></Link><hr /><Link to={'/registercollector'}><button className='btn btn-success' >Add a Collector</button></Link> </div>):(<Link to={'/update'}><Button className='btn btn-success' style={{backgroundColor:"green",color:"white"}}>Update Details</Button></Link>)}
   </div>:<div className='waiting-page'>
       <div></div>
   </div>
    }

</section>
<div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 foot-sec">
          <a href="/" target="_blank"></a>
                    <p class="mb-0 mt-3 about" style={{color:"white"}}>
            Website Content owned by POTHICHORU..
          </p>
                  </div>


        <div class="col-md-3 col-sm-6 foot-sec" style={{color:"white"}}>         
          <div class="footer-links" style={{color:"white"}}>
                      <h4>MAIN LINKS</h4> 
<div id="block-mainlinks-2" >      
   <div>
<ul>

	<li class="nav"><a class="nav-link" href="/aboutus" style={{color:"white"}}>About Us</a></li>
	<li class="nav"><a class="nav-link" href="/register" style={{color:"white"}}>Join Us</a></li>	
	
	<li class="nav"><a class="nav-link" href="/contactus" style={{color:"white"}}>Contact Us</a></li>
</ul>
</div>
  </div>

  </div>
  </div>
  </div>
  </div>




</div>
 

  )
}

export default HomeComponent