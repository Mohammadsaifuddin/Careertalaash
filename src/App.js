import React from'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Examinations from './components/pages/Examinations';
import Colleges from './components/pages/Colleges';
import jobs from './components/pages/jobs';




function App() {
   
  return (
    <>
    <Router>
    <Navbar />
       <Switch>
       <Route path='/' exact component={Home} />
       
       <Route path='/Courses' exact component={Courses}/>
       <Route path='/Examinations' exact component={Examinations}/>
       <Route path='/Colleges' exact component={Colleges}/>
       <Route path='/jobs' exact component={jobs}/>
      
       </Switch>
    </Router>
    </>
  
   
    
      
     
 );
}

export default App;
   