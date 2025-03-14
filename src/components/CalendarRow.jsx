import React from "react";
import Button from "../components/Button";

const CalendarRow = ({ date, salon }) => {
  const handleBooking = () =>{
    localStorage.setItem("bookedMovie", `${date} - ${salon}`);
    alert(`Du har nu bokat: ${date} - ${salon}`);
  };
  return (
    <tr>
      <td>{date}</td>
      <td>{salon}</td>
      <td>
        <Button text= "Boka" className="boka-button" onClick={handleBooking}/>
      </td>
    </tr>
  );
};

export default CalendarRow;