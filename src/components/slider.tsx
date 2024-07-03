import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function App() {
  const animation = { duration: 6000, easing: (t: number) => t };

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true, 
    slides: {
      origin: "center",
      perView: 3,
      spacing: 8
    },
    vertical: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },  
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    }
  });
  return (
    <div ref={ref} className="keen-slider" style={{ height: 300 }}>
      <div style={{backgroundColor:"blue"}} className="keen-slider__slide number-slide1">1</div>
      <div style={{backgroundColor:"black"}} className="keen-slider__slide number-slide2">2</div>
      <div style={{backgroundColor:"red"}} className="keen-slider__slide number-slide3">3</div>
      <div style={{backgroundColor:"green"}} className="keen-slider__slide number-slide4">4</div>
      <div style={{backgroundColor:"black"}} className="keen-slider__slide number-slide2">5</div>
      <div style={{backgroundColor:"red"}} className="keen-slider__slide number-slide3">6</div>
      <div style={{backgroundColor:"green"}} className="keen-slider__slide number-slide4">7</div>
    </div>
  );
}
