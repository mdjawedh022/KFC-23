import { useEffect, useState } from "react";
import "./App.css";
import Routing from "./routes/Routing";
import UpArrow from "./components/UpArrow/UpArrow";
function App() {
// const [loading,setLoading]=useState(true);

//   useEffect(()=>{
// setLoading(true);
// let timer=setTimeout(()=>{
//   setLoading(false)
//   return ()=>clearInterval(timer)
// },2000)
//   },[])
  return (
    <>
      
        <div className="App">
          <Routing />   
          <UpArrow />
        </div>
      
    </>
  );
}

export default App;
