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
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext';

function App() {
  const { user, setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
        <Router>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
          <Route exact path='/view'>
            <View />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
