import { Home } from '@mui/icons-material';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ResponsiveAppBar from './components/ResponsiveAppBar';



const App = () => {


  return (
    <div>
     
     <ResponsiveAppBar></ResponsiveAppBar>
     <HomePage></HomePage>

      
     
       
    </div>
    
    
   
  )
}

export default App;
