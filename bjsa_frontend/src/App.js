import './App.css';
import { getExpectedValue } from './ApiHandler';


async function retrieveExpectedValue() {
  console.log("Called");

  const dealerUpCard = document.getElementById("dealerUpCardInput").value.toString();
  const playersHand = document.getElementById("playerHandInput").value.toString();
  const deviation = document.getElementById("deviationInput").value.toString();

  const expectedValue = getExpectedValue(dealerUpCard, playersHand, deviation);
  console.log(expectedValue);

  document.getElementById("resultsLabel").innerHTML = expectedValue;

  return expectedValue;
};

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
        <button id="expectedValueButton" onClick={retrieveExpectedValue}>Get ExpectedValue</button>
        <label id="resultsLabel"></label>
      </div>
    </div>
  );
}

export default App;
