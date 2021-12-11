import { useState } from 'react'
import Ava from './components/avatar/Ava.js'
import First from './components/block/first/first'
import Second from './components/block/second/second'
import Page from './components/page/page.js'
import Footer from './components/footer/footer'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Link,
  Route
} from "react-router-dom";

function App() {
// const [page, setPage] = useState('auth');

  return (
    <BrowserRouter>
    <div class="App"> 
    <Link to={"/"}>Авторизация</Link>
    <br/>
    <Link to={"/resume"}>Резюме</Link>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="resume" element={<div>
                  <div class="block"></div>
                  <Ava />
                  <header>РЕЗЮМЕ</header>
                  <div class="textcols">
                    <div class="textcols-item">
                      <First /> </div>

                    <div class="textcols-item">
                      <Second /> </div>
                  </div>
              </div>} />
      </Routes> 
      <Footer />
      </div>    
      </BrowserRouter>
  );
}

export default App;
