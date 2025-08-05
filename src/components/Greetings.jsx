import { useEffect } from "react";
import { getHours, getHoursInTwelve, greet } from "../utils/utils";
import { useState } from "react";

function Greetings({ timezone }) {
  const [currentDay, setCurrentDay] = useState();
  const [currentDayTwelve, setCurrentDayTwelve] = useState();

  useEffect(() => {
    function getCurrentTime() {
      const currentD = greet(getHours(timezone));
      console.log(currentD);

      const currentDT = getHoursInTwelve(timezone);
      //   const currentDT = getHoursInTwelve();
      setCurrentDay(currentD.title);
      document.body.classList.remove(
        "morning",
        "afternoon",
        "evening",
        "night"
      );
      document.body.classList.add(currentD.color);
      setCurrentDayTwelve(currentDT);
    }

    getCurrentTime();
  }, []);

  return (
    <section id="greetings">
      <div className="greetings-container">
        <h1>{currentDay}</h1>
        <h3 className="current-time">{currentDayTwelve}</h3>
      </div>
    </section>
  );
}

export default Greetings;
