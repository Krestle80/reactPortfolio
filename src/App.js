import './App.css';
import tech from './techBlog.png'
import filler from './filler.png'
import therapistFinder from './therapistFinder.png'
import webDevGroupFind from './webDevGroupFinder.png'
import passGenPic from'./password_generator_pic.png'
import bubbleProject from './bubbleProject.png'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import Box from '@mui/material/Box';

let picArray =[ filler, tech, therapistFinder,webDevGroupFind,passGenPic, bubbleProject, filler]
function App(props) {
  return (
    <Box className="App" sx= {{backgroundColor:"#73c7ff", display:"flex", flexDirection:"column"}}>
      <Header />
      <Box>
        <Body app = {props.app} picArray = {picArray} />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
