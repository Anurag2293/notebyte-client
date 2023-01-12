import { Routes, Route } from 'react-router-dom';

import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Navbar from './components/Navbar';
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
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
