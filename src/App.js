import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from "./pages/Home";
import About from './pages/About';
import Title from './components/Title';
import LoginForm from './components/LoginForm';

function App() {
  // const [toggle, setToggle] = useState(true);
  // let renderElement = <></>;
  // if(toggle) {
  //   renderElement = <Home/>;
  // }
  // if(toggle) {
  //   renderElement = <Title/>
  // }
  // else {
  //   renderElement = <About/>
  // }
  return (
    <>
       {/* {renderElement}
       <button onClick={()=> setToggle(!toggle)}>Change Page</button> */}
       {/* <Title/> */}
       <LoginForm/>
    </>
  );
}

export default App;
