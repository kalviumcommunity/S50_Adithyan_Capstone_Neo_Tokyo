import React from 'react';
import { Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './Components/Home';
import Signup from './Components/Signup';
import Loginpg from './Components/Loginpg';
import Landing from './Components/Landing';
function App() {
  return (
    <Routes>
      <Route path='/Landing' element={<Landing/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Loginpg' element={<Loginpg/>}/>

    </Routes>
  );
}

export default App;
