import './App.css';
import pfp from './FrontPagePic.png';
import Header from './Header.js';

function App() {
  return (

    <div className="App">
      <Header/> 

      <div className = "Page">
        <div className = "LeftColumn">
          test
        </div>

        <div className="MainView">
          <img src={pfp} className = "Profile-pic"></img>
          <img src={pfp} className = "Profile-pic"></img>
        </div>

        <div className ="RightColumn">

        </div>
      </div>
    </div>
  );
}

export default App;
