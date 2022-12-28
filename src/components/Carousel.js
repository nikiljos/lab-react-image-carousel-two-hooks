import { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
const Carousel =()=>{

    let [currentSlide,changeSlide]=useState(0)

    let changeImage=(isForward)=>{
        changeSlide((prevState)=>{
            let next=prevState;
            next=isForward?next+1:next-1;
            if(next<0){
                next=0;
            }
            else if(next>2){
                next=2;
            }
            return next;
        })
    }
        
    let data=images[currentSlide]
 
    return (
        <div className="Carousel">
            <button onClick={() => changeImage(false)} className="back"> <ArrowBackIosIcon sx={{ color:"#ffffff",fontSize: 30, padding:"5px" }}/> </button>
            <button onClick={() => changeImage(true)} className="forward"> <ArrowForwardIosIcon sx={{ color:"#ffffff",fontSize: 30, padding:"5px" }}/> </button>

            <div className="content">
                <h1 className="overlay">{data.title}</h1>
                <h3 className="overlay">{data.subtitle}</h3>
                <img src={data.img} alt="" />
            </div>
        </div>
    );
}

export default Carousel;