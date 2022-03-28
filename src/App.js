import "./App.css";
import Navver from "./componant/Navver/Navver";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./componant/Products/Products";
import Chooseproduct from "./componant/Chooseproduct/Chooseproduct";

function App() {
  return (
    <div className="App container">
      <div>
        <Navver></Navver>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <Chooseproduct></Chooseproduct>
        </div>
        <div className="col-lg-8 col-sm-12 ">
          <Products></Products>
        </div>
      </div>
    </div>
  );
}

export default App;
