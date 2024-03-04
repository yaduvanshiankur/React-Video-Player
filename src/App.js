import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Playlist from "./components/playlist";
import VideoPlayer from "./components/videoPlayer";

function App() {
  return (
    <div className="">
    <Router>
      <Routes>
        <Route path="/" Component={Playlist}></Route>
        <Route path="/video/:id" Component={VideoPlayer}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
