import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

let Footer = () =>{
return(

    <Box sx = {{display:"flex", justifyContent:"center", mt:3}}>
        <Button variant="contained" href="https://github.com/Krestle80" target="blank">gitHub</Button>
        <Button variant="contained" href="https://www.linkedin.com/in/kyle-costello-63b51422b" target="blank">linkedin</Button>
    </Box>
)}


export default Footer
