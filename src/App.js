import React, { Component } from "react";
import JokeList from "./JokeList";

/*function App() {
  return (
    <div className="App">
      <JokeList />
    </div>
  );
}*/

//class version
class App extends Component {
  render() {
    return (
      <div className="App">
        <JokeList />
      </div>
    )
  }
}
export default App;
