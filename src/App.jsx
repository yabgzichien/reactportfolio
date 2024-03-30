import './App.css'
import Home from './pages/Home'
import Work from './pages/Work';
import Certificate from './pages/Certificate';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {

  return (
    <Router>
      <Switch>
        <Route path='/work/:params'>
          <Work />
        </Route>

        <Route path='/cert/:params'>
          <Certificate />
        </Route>
        
        <Route path='/'>
           <Home  />
        </Route>

      </Switch>
    </Router>
  )
}

export default App
