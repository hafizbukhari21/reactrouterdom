import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Page1 from './Page/PageOne'
import Page2 from './Page/PageTwo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <BrowserRouter>
            <Link to="/page1">Page 1</Link>
            <br/>
            <Link to="/page2">Page 2</Link>

            <Switch>
              <Route path="/page1">
                <Page1/>
              </Route>
              <Route path="/page2">
                <Page2/>
              </Route>
            </Switch>
          </BrowserRouter>
          
        </nav>
      </header>

    
    </div>
  );
}

export default App;
