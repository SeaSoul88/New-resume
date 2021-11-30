import Ava from './components/avatar/Ava.js'
import First from './components/block/first/first'
import Second from './components/block/second/second'
import './App.css';

function App() {
  return (
    <div class="App">
        <div>
          <div class="block"></div>
          <Ava />
          <header>РЕЗЮМЕ</header>
          <div class="textcols">
            <div class="textcols-item">
              <First /> </div>

            <div class="textcols-item">
          <Second /> </div>
          </div>
          </div>
          <div class="footer"></div>
</div>
          
          
  );
}

export default App;
