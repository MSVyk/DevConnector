import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    // check for token in LS when app first runs
    // if (localStorage.token) {
    //   // if there is a token set axios headers for all requests
    //   setAuthToken(localStorage.token);
    // }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    // window.addEventListener('storage', () => {
    //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
    // });
  }, []);
  console.log('>>>>>>>the ap <<<<<<<<<<')
  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
        <section className="container">
          <Alert />
          <Routes>
              <Route exact path="/register" element={<Register/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/dashboard" element={<PrivateRoute component={Dashboard}/>} />
              <Route exact path="/create-profile" element={<PrivateRoute component={CreateProfile}/>} />
              <Route exact path="/edit-profile" element={<PrivateRoute component={EditProfile}/>} />
              <Route exact path="/add-experience" element={<PrivateRoute component={AddExperience}/>} />
              <Route exact path="/add-education" element={<PrivateRoute component={AddEducation}/>} />
          </Routes>
        </section>
      </Fragment>
    </Router>
  </Provider>
  )
}
export default App;
