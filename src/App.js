import { useState } from "react";
import "./styles.css";
export default App;

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [percentage, setPercentage] = useState("");
  const [friendPercentage, setFriendPercentage] = useState("");
  const [billInput, setBillInput] = useState("");

  function handleBillInput(e) {
    setBillInput(e.target.value);
  }

  function handlePercentage(e) {
    setPercentage(e.target.value);
  }

  function handleFriendPercentage(e) {
    setFriendPercentage(e.target.value);
  }

  return (
    <div className="App">
      <BillInput billInput={billInput} onSetBillInput={handleBillInput} />

      <SelectPercentage
        percentage={percentage}
        onSetPercentage={handlePercentage}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={friendPercentage}
        onSetPercentage={handleFriendPercentage}
      >
        How did your friend like the service?
      </SelectPercentage>
      <Total
        myPercentage={percentage}
        friendPercentage={friendPercentage}
        billInput={billInput}
      />
      <Reset
        onSetPercentage={() => setPercentage("")}
        onFriendSetPercentage={() => setFriendPercentage("")}
        onSetBillInput={() => setBillInput("")}
      />
    </div>
  );
}

function BillInput({ billInput, onSetBillInput }) {
  return (
    <div className="bill">
      <p>How much was the Bill?</p>
      <input
        type="text"
        placeholder="Bill value"
        value={billInput}
        onChange={onSetBillInput}
      />
      <em>The bill is {billInput} euros.</em>
    </div>
  );
}

function SelectPercentage({ children, percentage, onSetPercentage }) {
  return (
    <div className="select-percentage">
      <p>{children}</p>
      <select value={percentage} onChange={onSetPercentage}>
        <option value="">Please choose an option</option>
        <option value="0">Disatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Total({ myPercentage, friendPercentage, billInput }) {
  const total =
    (Number(myPercentage) + Number(friendPercentage)) / 2 + Number(billInput);
  return (
    <div className="total">
      <strong>
        Total: {total}$ (${total}+$
        {Number(myPercentage) + Number(friendPercentage) / 2} tip)
      </strong>
    </div>
  );
}

function Reset({ onSetPercentage, onFriendSetPercentage, onSetBillInput }) {
  function handleReset() {
    onSetPercentage();
    onFriendSetPercentage();
    onSetBillInput();
  }
  return (
    <div className="reset">
      <button className="reset-button" onClick={handleReset}>
        reset
      </button>
    </div>
  );
}
