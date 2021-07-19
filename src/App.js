import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Song from './components/Song';
import Album from './components/Album';
import Artist from './components/Artist';
import Playlist from './components/Playlist';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
              <Redirect to="/music-app-client"/>
          </Route>
          <Route exact path="/music-app-client" component={Home}/>
          <Route path="/song/:id" component={Song}/>
          <Route path="/album/:id" component={Album}/>
          <Route path="/artist/:id" component={Artist}/>
          <Route path="/playlist/:id" component={Playlist}/>
          <Route component={() => <h1>404 Not Found</h1>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
