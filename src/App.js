import "./App.css";
import Login from "./components/login/Login";

function App() {
  const a = 5;
  const b = 10;
  return (
    <div className="App">
      <Login />
      <p>Learn react</p>
      <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
      </ul>
      <h1 data-testid="mytestid">Hello</h1>
      <span title="sum">{a + b}</span>
    </div>
  );
}

export default App;
