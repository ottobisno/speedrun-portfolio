import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

// Enabling the app to access information from the GraphQL server and cache it
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
        <Home />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
