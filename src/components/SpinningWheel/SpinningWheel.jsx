import "./SpinningWheel.css";
import WheelDataDisplay from "../WheelDataDisplay";
import spinChoice from "../../utils/spinChoice";
import { useState, useEffect } from "react";

function SpinningWheel() {
  const [category, setCategory] = useState();
  const [spinAnim, setSpinAnim] = useState();

  const handleSpinAnim = () => {
    setCategory();
    const root = document.querySelector(":root");
    const randomRotate = Math.floor(Math.random() * (1800 - 1080)) + 1080;
    root.style.setProperty('--spinRotate', `${randomRotate}deg`);
    setSpinAnim('spinAnim');
    setTimeout(() => {
      setCategory(spinChoice());
      setSpinAnim();
    }, 4000)
  }

  useEffect(() => {
    console.log(category)
  }, [category])

  return (
    <div className="SpinningWheel">
      <div className="SpinningWheelContainer">
          <div className="selector"></div>  
        <div className={`SpinningWheelCloser ${spinAnim}`}>
          <WheelDataDisplay myClass="four" />
          <WheelDataDisplay myClass="secondFour" />
        </div>
      </div>
      <button className="spinButton" onClick={handleSpinAnim}>SPIN</button>
    </div>
  );
}

export default SpinningWheel;
