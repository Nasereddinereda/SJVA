import React from "react"; 
import { Slide } from 'react-slideshow-image';
import img1 from "../../img/carousel/img-1.jpg";
import img2 from "../../img/carousel/img-2.jpg";
import img3 from "../../img/carousel/img-3.jpg";


const properties = {
    duration: 3500,
    transitionDuration: 500,
    infinite: true,
    arrows: true 
}

const slideShow = () => {
    return(
        <div className="containerSlide" >
         <Slide {...properties}> 
           <div className="each-slide">
                <div>
                    <img src={img1} alt="img1" />
                </div>
            </div>
           <div className="each-slide">
                <div>
                    <img src={img2} alt="img2" />
                </div>
            </div>
           <div className="each-slide">
                <div>
                    <img src={img3} alt="img3" />
                </div>
            </div>
         </Slide>
        </div>
    );
}

export default slideShow ; 