import React from "react";

const Seat = (props) => {
  let val = props.no;
  return (
    <div className="seat" onClick={() => props.select(val)}>
      <p>Seat N0.</p>
      <p>{props.no}</p>
    </div>
  );
};

export default Seat;
