import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'

const AboutusComponent = () => {
  return (
    <div style={{backgroundColor:"skyblue"}}>
        <img src="src/images/back2.jpg" alt=""  style={{
            width:"30%"
        }}/>
        <Accordion style={{color:"red",
        backgroundColor:"skyblue",
        fontFamily:"Nunito, Arial, Helvetica, sans-serif",
        fontWeight:"600px",
        display:"grid",
        padding:"2rem 2rem",
       
        fontSize:"20px",
        textAlign:"center"

    }}>
      <AccordionSummary
       
        aria-controls="panel1-content"
        id="panel1-header"
      >
   Interested?... Click here
      </AccordionSummary>
      <AccordionDetails>
        Are you interested in donating some food to the needy people who suffer...
      The food (Pothichoru and other foods) being distributed in front of major hospitals
       like RCC, Medical Colleges , have you ever received it??? It is a great consolation to those in needy... We collect them from you and give to the needy. Our 
       Collectors will get in touch with you after you signup with us...
      </AccordionDetails>
    </Accordion>
    </div>
  )
}

export default AboutusComponent