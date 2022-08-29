import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import User from './User.js'

function App() {
  return (
    <Routes>
        <Route path="user/:userId" element={<User />} />
    </Routes>
  );
}

export default App;

// import '../styles/App.css';
// import React, { Component, useState } from 'react'; 
// import { Switch, Router, Route } from 'react-router-dom';


// function App() {

//     return (
//     <Router>
//         <Switch>
//             <Route path="users/:userId">
//                 <Users />
//             </Route>
//         </Switch>
//     </Router>
//     );

// }

// export default App;
