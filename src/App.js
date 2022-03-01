import Home from './components/home'
import Navigation from './components/Navigation';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
<div>
  <Router>
  <Navigation/>
  <Routes>
    <Route exact path ='/' component = {App}/>
    <Route path ='/home' component = {Home}/>
  </Routes>
  </Router>

</div>
  );
}
export default App;
