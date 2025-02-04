import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Post from'./components/Post';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element = {<Home />}></Route>
        <Route exact path='/post' element = {<Post />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
      
  );
}

export default App;
