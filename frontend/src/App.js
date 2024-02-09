import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path='/' exact element={<NotesList />} />
          <Route path='/edit/:id' element={<CreateNote />} /> 
          <Route path='/create' element={<CreateNote />} />
          <Route path='/user' element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
