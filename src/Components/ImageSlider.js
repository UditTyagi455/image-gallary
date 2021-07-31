import React,{useState} from 'react';
import {FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight} from "react-icons/fa"

const ImageSlider = ({slider}) =>{
    const [current,setCurrent] = useState(0);
    const  length =slider.length;
    
    const clickLeft =() =>{
        setCurrent(current === 0 ? length-1 : current-1)
    }

    const clickRight =() =>{
        setCurrent(current === length-1 ? 0 : current+1);
    }
    
    if(!Array.isArray(slider) || slider.length <= 0){
        return null ;
    }

    return (
        <section className="slider">
        <FaRegArrowAltCircleLeft className="arrow_left" onClick={clickLeft}/>
        <FaRegArrowAltCircleRight className="arrow_right" onClick={clickRight}/>
        {slider.map((sliders,index) =>(
            <div className={current === index ? "slide active" : "slide"} key={index}>
              {current === index && (<img src={sliders.image} alt="hello" className="image"/>)}
            </div>
                
            ))}
        </section>
        
    )
}
export default ImageSlider;