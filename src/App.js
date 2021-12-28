import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login, logout } from "./actions/Actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogged ? (
        <button onClick={() => dispatch(logout())}>Log out</button>
      ) : (
        <button onClick={() => dispatch(login())}>Log in</button>
      )}
      <p>Is online: {isLogged.toString()}</p>
    </div>
  );
}

export default App;
