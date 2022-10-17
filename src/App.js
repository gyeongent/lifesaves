import logo from './img/ls_logo.svg';
import InsLogo from './img/instagram_logo.svg';
import TumblLogo from './img/tumblbug_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          현재 페이지 준비중입니다.
        </div>
        <div className="social">
        <ul>
          <li>
            <a href="https://instagram.com/life_saves._" target="blank">
              <img src={InsLogo} alt="Instagram Icon" width="25px"/>
            </a>
          </li>
          <li>
            <a href="https://tumblbug.com/u/lifesaves" target="blank">
              <img src={TumblLogo} alt="Tumblbug Icon" width="75px"/>
            </a>
          </li>
        </ul>
      </div>
      </header>
    </div>
  );
}

export default App;
