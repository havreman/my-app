import React from "react";
import Button from "../components/Button";

const CalendarRow = ({ date, salon }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{salon}</td>
      <td>
        <Button text= "Boka" className="boka-button" />
      </td>
    </tr>
  );
};

export default CalendarRow;