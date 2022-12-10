import wheelData from "../utils/wheelData";

function WheelDataDisplay({ myClass }) {
  return (
    <div className={myClass}>
      {wheelData.map((data) => (
        <div className={`choices ${data.class}`}>{data.content}</div>
      ))}
    </div>
  );
}

export default WheelDataDisplay;