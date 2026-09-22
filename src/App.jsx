import "./App.css";

import Hero from "./components/Hero/Hero";
import Birthday from "./components/Birthday/Birthday";
import Story from "./components/Story/Story";
import Memories from "./components/Memories/Memories";
import Misty from "./components/Misty/Misty";
import Letter from "./components/Letter/Letter";
import Final from "./components/Final/Final";
import HeartCursor from "./components/HeartCursor/HeartCursor";

function App() {
  return (
    <div className="app">

      <HeartCursor />

      <nav className="navbar">
        <div className="nav-logo">
          ♡ For My Favourite Person
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#story">Our Story</a>
          <a href="#memories">Memories</a>
          <a href="#letter">With You</a>
          <a href="#birthday">Birthday</a>
        </div>
      </nav>

      <Hero />
      <Birthday />
      <Story />
      <Memories />
      <Misty />
      <Letter />
      <Final />

    </div>
  );
}
export default App;