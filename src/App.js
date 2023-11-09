import Login from "./components/login";
import Logintypes from "./components/logintypes";

function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex justify-center mt-40"> 
        <Logintypes />
        {/* <Login/> */}
      </div>
    </div>
  );
}

export default App;
