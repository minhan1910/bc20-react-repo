import "./App.css";
//Không cần /index.js hoặc có thể / đến mà ko cần .js
// import Baitap1 from "./baitap1";
// import Baitap2 from "./baitap2";
// import BTVN_REACTJS from "./BTVN_B1_react";
import RenderingElements from "./rendering-elements";
import HandlingEvent from "./handling-events";
import State from "./state";
import ChangColorCar from "./changColorCar";
import ListKeys from "./list-keys";
import Example from "./list-keys/example";
import Communication from "./communication";
import LiftingStateUpCart from "./shopping-cart";
import UserManagement from "./user-management";


function App() {
  return <div>
    <RenderingElements/>
    <hr/>
    <HandlingEvent/>
    <hr/>
    <State/>
    <hr/>
    <ChangColorCar/>
    <hr/>
    <ListKeys/>
    <hr/>
    <Example/>
    <hr/>
    <Communication/>
    <hr/>
    <LiftingStateUpCart/>
    <hr/>
    <UserManagement/>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>;
}

export default App;
