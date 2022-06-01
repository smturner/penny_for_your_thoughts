
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {} from 'react-dom';
//need these imports to connect apolloClient to front end
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AppLogin from './AppLogin'
import MainNav from './components/navbar/navbar';
import Home from './Pages/Home'
import CreateQuote from './Pages/createQuote'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <MainNav />
            {/* <Home /> */}
          <AppLogin />
          {/* <CreateQuote /> */}
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >git 
            Learn React
          </a> */}
        </header>
      </div>
    </ApolloProvider>

  );
}

export default App;
