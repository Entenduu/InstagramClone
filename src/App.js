
import './App.css';
import Login from './components/Login';
import { Route } from 'react-router-dom'
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <Route exact path="/" >
        <Login />
      </Route>
      <Route path="/feed" >
        <Feed />
      </Route>
    </div>
  );
}

export default App;
