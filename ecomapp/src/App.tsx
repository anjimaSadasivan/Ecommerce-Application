import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login'
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { GoogleOAuthProvider } from '@react-oauth/google';



const App = () => {


  return (
    <div>

<GoogleOAuthProvider clientId="1035078456632-v6fovvukpgeo786ra7bs8und65cgep34.apps.googleusercontent.com">
<ResponsiveAppBar></ResponsiveAppBar>
     <HomePage></HomePage>
     <Login></Login>


</GoogleOAuthProvider>
    
     
     
    

      
     
       
    </div>
    
    
   
  )
}

export default App;
