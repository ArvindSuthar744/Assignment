import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Logout from "./Logout";

function App() {
  return (
    <>
      <div className="main">
        <Login />
        <Logout />
      </div>
    </>
  );
}

export default App;
