import Player from "./components/player/player";
import Sidebar from "./components/sidebar/sidebar";
import "./stylesheets/color-string-constants.scss";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Player />
    </div>
  );
}

export default App;
