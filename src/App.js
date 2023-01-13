import { Routes, Route } from 'react-router-dom';

import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message="This is an Alert"/>

        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/signup' element={<Signup/>} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
