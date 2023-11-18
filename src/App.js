import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Plants from './Pages/Plants';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path="/plants" element={<Plants />}> </Route>
      <Route></Route>
    </Routes>
  );
}

export default App;
