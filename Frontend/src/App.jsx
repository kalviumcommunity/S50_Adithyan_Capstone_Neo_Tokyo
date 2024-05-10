import React from 'react';
import { Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './Components/Home';
import Signup from './Components/Signup';
import Loginpg from './Components/Loginpg';
import Landing from './Components/Landing';
import Profile from './Components/Profile';
import Blogs from './Components/Blogs';
import Blogpost from './Components/Blogpost';
import About from './Components/About';
function App() {
  return (
    <Routes>
      <Route path='/About' element={<About/>}/>
      <Route path='/Blogpost' element={<Blogpost/>}/>
      <Route path='/Blogs/:id' element={<Blogs/>}/>
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Landing' element={<Landing/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Loginpg' element={<Loginpg/>}/>

    </Routes>
  );
}

export default App;
