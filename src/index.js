import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    background: {
      default:'#73c7ff',
    },
  },
  
})
theme.typography.h4 = {
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    color:'white'
  },
  [theme.breakpoints.between('sm','md')]: {
    fontSize: '2rem',
    color:'white'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
    color:'white'
  },
};
theme.typography.h5 = {
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    color:'white'
  },
  [theme.breakpoints.between('sm' ,'md' )]: {
    fontSize: '1.25rem',
    color:'white'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.75rem',
    color:'white'
  },
};


let app = ()=>{
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} > 
    <CssBaseline />
      <App app={app} theme = {theme}/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
}
app()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
