import { useEffect, useState } from "react";
import "./App.css";
// import Footers from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";
// import Deals from "./pages/Deals/Deals";
import Routing from "./routes/Routing";

function App() {
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
setLoading(true);
let timer=setTimeout(()=>{
  setLoading(false)
  return ()=>clearInterval(timer)
},1000)
  },[])
  return loading ? (
    <div className="div-loading">
      {" "}
      <img
        src="https://media0.giphy.com/media/JrqjNrXQxPs9BgASJ7/giphy.gif"
        alt="a"
      />
    </div>
  ) : (
    <div className="App">
      {/* <Navbar /> */}
      <Routing />
      {/* <Deals/> */}
      {/* <Footers /> */}
    </div>
  );
}

export default App;
