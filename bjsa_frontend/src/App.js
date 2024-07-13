import './App.css';

function App() {
  return (
    <div className="App">
      <div id="dealerUpCard">
        <label>Enter the dealer's up card: </label>
        <input type="text" id="dealerUpCardInput"></input>
      </div>

      <div id="playersHand">
        <label>Enter the player's starting hand: </label>
        <input type="text" id="playerHandInput"></input>
      </div>

      <div>
        <label>Enter the deviation you want to test: </label>
        <input type="text" id="deviationInput"></input>
      </div>

      <div>
        <label id="resultsLabel"></label>
      </div>
    </div>
  );
}

export default App;
