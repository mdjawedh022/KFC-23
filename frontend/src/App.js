import "./App.css";
import Footers from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Deals from "./pages/Deals/Deals";
import Routing from "./routes/Routing";

function App() {
  return (
    <div className="App">
      {/* <Routing /> */}
      <Navbar/>
      <Deals/>
      <Footers/>
    </div>
  );
}

export default App;
