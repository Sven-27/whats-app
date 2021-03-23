import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <div className="app__body">
        <Switch>
          <Route path="/rooms/:roomId">
            <Sidebar />
            <Chat />
          </Route>
          <Route path="/">
            <Sidebar />
          </Route>        
        </Switch>     
      </div>
      </Router>
    </div>
  );
}

export default App;
