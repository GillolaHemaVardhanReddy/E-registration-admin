import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
import AddUser from './components/AddUser/AddUser'
import AllEmployee from './components/AllEmployee/AllEmployee'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='add' element={<AddUser/>}/>
            <Route path='all' element={<AllEmployee/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
