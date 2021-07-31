import React from "react";
import ImageSlider from "./Components/ImageSlider";
import "./App.css"
import { slider } from "./Components/SliderData";

const App = () =>{
   return(
     <>
       <ImageSlider slider={slider}/>
     </>
   )
}
export default App;