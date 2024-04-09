
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/addtask" element={<AddTask />}></Route>
          <Route path="/tasklist" element={<TaskList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
