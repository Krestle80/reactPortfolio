import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

let Header = () =>{
    return (
        
            <AppBar position="static">
                <Toolbar sx= {{ 
        display: "flex",
        justifyContent: "space-between"}}>
                    <section><Typography variant= "h3">Kyle Costello</Typography></section>
                    <section>
                        
                       <Button variant="contained" href="https://docs.google.com/document/d/1IrHbNDwEZQFoGTYIJaZN8a6IiF1UrElOLOzNmB03HVU/edit?usp=sharing" targer="blank">Resume</Button> 
                       <Button variant="contained" href="mailto:kylec0217@gmail.com" >Email</Button>
                    </section>
                </Toolbar>
            </AppBar>
    )
} 


export default Header