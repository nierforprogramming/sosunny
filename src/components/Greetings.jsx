import { useEffect } from "react";
import { getHours, getHoursInTwelve, greet } from "../utils/utils";
import { useState } from "react";

function Greetings() {
  const [currentDay, setCurrentDay] = useState();
  const [currentDayTwelve, setCurrentDayTwelve] = useState();

  useEffect(() => {
    function getCurrentTime() {
      const currentD = greet(getHours());
      console.log(currentD);

      const currentDT = getHoursInTwelve();
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
    const updateTime = setInterval(getCurrentTime, 1000);

    return () => clearInterval(updateTime);
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
