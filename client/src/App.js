import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import {GoogleOAuthProvider} from '@react-oauth/google';

const App = () => (
  <GoogleOAuthProvider clientId = "890312707554-b73u9stq65c8njg26h9k7bogoi5b1luk.apps.googleusercontent.com">
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/auth" element = {<Auth/>} />
      </Routes>
    </Container>
  </BrowserRouter>
  </GoogleOAuthProvider>
);

export default App;