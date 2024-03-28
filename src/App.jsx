import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import { todos } from "./data.json";

console.log(todos);
function App() {
  return (
    <>
      <Navbar />
      <h1>Home page</h1>

      <ul>
        {todos.map((x) => (
          <li key={x.id}>
            <Link to={x.slug}>{x.todo}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
