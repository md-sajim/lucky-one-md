import "./App.css";
import Navver from "./componant/Navver/Navver";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./componant/Products/Products";

function App() {
  return (
    <div>
      <div className="App">
        <Navver></Navver>
      </div>
      <div className="row">
        <div className="col-lg-8 col-sm-12 ">
          <h1>Name: Sajim</h1>
          <Products></Products>
        </div>
        <div className="col-lg-4 col-sm-12"></div>
      </div>
    </div>
  );
}

export default App;
