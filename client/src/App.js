
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import AuthService from './utils/auth'
// import { } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//need these imports to connect apolloClient to front end
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import AppLogin from './AppLogin'
import MainNav from './components/navbar/navbar';
import Home from './Pages/Home'
import LoginCard from './components/card/loginCard'

import Login from './components/login/login.component'
import SignUp from './components/login/signup.component'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>

      <div className="App">
        <Router>
          <header className="App-header">

            <MainNav />
            <Routes>
              <Route
              path= "/"
              element={<LoginCard />}
            />
            </Routes>
            <Routes>

              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>

            <Routes>
              <Route
                path="/home"
                element={<Home />}
              />
            </Routes>



          </header>
        </Router>
      </div>

    </ApolloProvider>

  );
}

export default App;
