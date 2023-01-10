import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
