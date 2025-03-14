import React from "react";
import CalendarRow from "./CalendarRow";

const TableBody = () => {
  const calendar = [
    { date: "Idag 22/1 14:00", salon: "Salong 1" },
    { date: "Imorgon 23/1 12:00", salon: "Salong 2" },
    { date: "Imorgon 23/1 18:00", salon: "Salong 1" },
    { date: "Imorgon 23/1 20:00", salon: "Salong 2" },
  ];

  return (
    <tbody>
      {calendar.map((calendar, index) => (
        < CalendarRow
          key={index}
          date={calendar.date}
          salon={calendar.salon}
        />
      ))}
    </tbody>
  );
};

export default TableBody;