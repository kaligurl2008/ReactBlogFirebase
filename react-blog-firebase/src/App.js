import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import Auth from './Pages/Auth/Auth';
import Homepage from './Pages/Homepage/Homepage';
import AddArticle from './Pages/AddArticle/AddArticle'
import CategoryArticle from './Pages/CategoryArticle/CategoryArticle';
import ArticleDetails from './Pages/ArticleDetails/ArticleDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/addarticle' element={<AddArticle />} />
          <Route path='/category/:categoryName' element={<CategoryArticle />} />
          <Route path='/article/:articleId' element={<ArticleDetails />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
