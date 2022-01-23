import React from "react";
import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
 
let titleArray =["React Portfolio", "TechBlog","Therapist Finder", "Web Dev Group Finder", "Password Generator","About Me"]
let descriptionArray = ["This project is an interactive web app that lets you see my resume, Github, linkedin, and projects. Simply click the arrows on either side of the screen to checkout some of my projects. Click their title to see the deployed page, and the description to see their gitHub pages. See the top nav for my resume, contact info, and the bottom nav for linkedin and Github", "The goal for this project was to create a blog where users can sign up, login, post, edit their posts, and comment. All using HTML, CSS, sequalize, and javascript with some node packeges", "This was a group project whose goal was to create a search engine for occupational therapists. It uses React with Material ui, express.js, MongoDB, and graphql to achive this goal","This project's goal was to create a social network for developers, allowing them to work on specific skills. It primarly uses express.js, Sequalize, handlebars, JavaScript, HTML, and CSS","This project's goal was to create a password generator that lets the user pick how long their password will be. It uses mostly JavaScript, with CSS and HTML to display the information","I'm a full stack web developer with skills in HTML,CSS, JavaScript, Node.js, Handlebars, React, mySQL 2, Mongodb, Apollo,  graphql, and more."]
let deployedLinks = ["/", "https://quiet-island-67445.herokuapp.com/","https://nameless-atoll-73538.herokuapp.com/", "https://web-dev-group-finder.herokuapp.com/signUp", "https://krestle80.github.io/password_generator/", "https://www.linkedin.com/in/kyle-costello-63b51422b" ]
let gitHubRepos = ["/", "https://github.com/Krestle80/techBlog", "https://github.com/letqin/therapist-finder", "https://github.com/QuentinHnilica/web-dev-group-finder", "https://github.com/Krestle80/password_generator", "https://github.com/Krestle80"]
let currentCard =0

let Body = (props) => {
    
    console.log(props.picArray[currentCard])
let moveRight = () =>{
    if(currentCard <= 4 ){
        currentCard ++ 
        console.log(currentCard)
        props.app()
        }
    else {
        currentCard = 0
        props.app()
    }
}
let moveLeft = ()=>{
    if(currentCard >= 1 ){
    currentCard -- 
    console.log(currentCard)
    props.app()
}
else {
    currentCard= 5
    props.app()
}
}
    return( 
        <Box sx ={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"100%", backgroundColor:"#73c7ff"}}>
            <ArrowBackIosIcon onClick={()=> moveLeft()} sx = {{fontSize: 60, color: "#71838f" }} />
            <Card sx = {{mt:5, backgroundColor:"primary.main"}}>
                <CardContent>
                    <Box sx ={{display:'flex', flexDirection:"column",  m:2 }}>
                        <CardMedia component="img"  image={props.picArray[currentCard]}  ></CardMedia>
                        <Box sx = {{display: "flex", alignItems:"start", flexDirection:"column"}}>
                            <Link variant="h4" href= {deployedLinks[currentCard]} target="blank" 
                            underline="none" 
                            >{titleArray[currentCard]}</Link>
                            <Link variant="h5" href= {gitHubRepos[currentCard]} underline="none" target="blank">{descriptionArray[currentCard]}</Link>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <ArrowForwardIosIcon onClick={()=> moveRight()} sx = {{fontSize: 60, color: "#71838f"  }} />
        </Box>
    )

    
}

export default Body