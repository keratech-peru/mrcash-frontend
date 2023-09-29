import { useState, useEffect } from "react";

import { TimerStatusType, TimerClockType } from "../../utils/types";

import "./Timer.css";

interface TimerProps {
  time: number;
  handleTimer: any;
};

const Timer = ({ time, handleTimer }: TimerProps) => {
  const [status, setStatus] = useState<TimerStatusType>("active");
  
  const [clock, setClock] = useState<TimerClockType>({
    time,
    seconds: time - Math.floor((time - 1) / 60) * 60 -1,
    minuts: Math.floor((time - 1) / 60)
  });

  const className = `timer timer--${status}`;
  
  const textContent = {
    active: `${clock?.minuts}:${clock?.seconds <= 10 ? `0${clock?.seconds}` : clock?.seconds} segundos`,
    inactive: "¡Se terminó el tiempo de espera!"
  };

  useEffect(() => {
    setTimeout(() => {
      if (clock?.time === 0) {
        return;
      };

      setClock({
        time: clock?.time - 1,
        seconds: clock?.time - Math.floor((clock?.time - 1) / 60) * 60 - 1,
        minuts: Math.floor((clock?.time - 1) / 60)
      });
    }, 1000);
  }, [clock?.time]);

  useEffect(() => {
    if (clock?.time === 0) {
      setStatus("inactive");
      handleTimer(true);
    };
  }, [clock?.time, handleTimer]);

  return (
    <p
      className={className}
    >
      {textContent[status]}
    </p>
  );
};

export default Timer;
