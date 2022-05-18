import { useState } from 'react';
import './App.css';
import { useKeenSlider } from "keen-slider/react";

const slides = [
  {
    id: 1,
    color: "#14FF00"
  },
  {
    id: 2,
    color: "#FAFF00"
  },
  {
    id: 3,
    color: "#001AFF"
  }
]

function App() {

  const [sliderRef, slider] = useKeenSlider({
    mode: "snap",
    initial: 0,
    loop: true,
    // maybe here you need write the following property : 
    // slidesPerView: 3,
    // instead of the next obj:
    slides: {
      perView: 1
    },
    slideChanged(slider) {
      // show in console current slide
      console.log(slider.details().relativeSlide)
    }
  });


  return (
    <div>
      <div className="slider keen-slider" ref={sliderRef}>
        {
          slides.map(slide => {
            return (
              <div style={{ backgroundColor: slide.color }} className="keen-slider__slide slide">

              </div>
            )
          })
        }


      </div>
      <div className="buttons">
        <button className='button'
          //                 maybe here you need to write : slider.prev()
          onClick={(e) => e.stopPropagation() || slider.current?.prev()}
        >prev</button>
        <button className='button'
          //                 maybe here you need to write : slider.next()
          onClick={(e) => e.stopPropagation() || slider.current?.next()}
        >next</button>
      </div>


    </div>
  );
}

export default App;
