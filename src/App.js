import React, { useContext, useEffect } from 'react';
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignupPage from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'
import { AuthContext, FirebaseContext } from './store/Context';

function App() {
  const {user,setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <SignupPage/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route exact path='/create'>
          <Create />
        </Route>
      </Router>
    </div>
  );
}

export default App;
