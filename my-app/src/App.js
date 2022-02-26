import logo from "./logo.svg";
import "./App.css";

let name = "Sailesh"
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          autem suscipit dolore laborum, assumenda consequuntur! Maiores
          recusandae natus id consequatur similique, aliquid iusto perspiciatis
          commodi quasi tempora molestiae culpa autem.
        </p>
      </div>
    </>
  );
}

export default App;
