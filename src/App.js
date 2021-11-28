import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Contacts from './Components/Contacts/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from './Book/List';
import ItemDetails from './Book/ItemDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contacts />
          </Route>
          <Route exact path="/book-list">
            <List />
          </Route>
          <Route exact path="/book-list/:name">
            <ItemDetails />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
