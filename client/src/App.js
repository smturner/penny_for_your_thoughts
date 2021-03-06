
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Auth from './utils/auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//need these imports to connect apolloClient to front end
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './Pages/Home'
import LoginCard from './components/loginCard'
import Login from './components/loginComponent'
import SignUp from './components/SignupComponent'
import CreateQuote from './Pages/createQuote'
import UserQuotes from './Pages/userQuotes'
import AllQuotes from './Pages/allQuotes';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>
      <div className="App">
        
        <Router>
          <header className="App-header">
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
            
            <Routes>
              <Route
              path="/create"
              element={<CreateQuote />}
              />
            </Routes>
            <Routes>
              <Route
              path="/user"
              element={<UserQuotes/>}
              />
            </Routes>
            <Routes>
              <Route
              path="/viewAll"
              element={<AllQuotes/>}
              />
            </Routes>
            
          </header>
        </Router>

      </div>

    </ApolloProvider>

  );
}

export default App;
