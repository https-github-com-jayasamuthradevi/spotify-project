import "./App.css";
import Player from "./components/player/player";
import Sidebar from "./components/sidebar/sidebar";
import './stylesheets/color-string-constants.css';


function App() {
  return <div className="App">
    <Sidebar />
    <Player />
  </div>;
}

export default App;
