import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateNote2 from './components/editNote';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="container p-4">
          <Routes>
            <Route path='/' exact element={<NotesList />} />
            <Route path='/edit/:id' element={<CreateNote2 />} /> 
            <Route path='/create' element={<CreateNote2 />} />
            <Route path='/user' element={<CreateUser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
