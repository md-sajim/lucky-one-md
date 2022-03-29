import "./App.css";
import Navver from "./componant/Navver/Navver";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./componant/Products/Products";

function App() {
  return (
    <div className="App">
      <Navver></Navver>
      <div className="container ">
        <Products></Products>
      </div>
    </div>
  );
}

export default App;
