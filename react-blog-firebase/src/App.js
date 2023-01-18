import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import Auth from './Pages/Auth/Auth';
import Homepage from './Pages/Homepage/Homepage';
import AddArticle from './Pages/AddArticle/AddArticle'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/addarticle' element={<AddArticle />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
