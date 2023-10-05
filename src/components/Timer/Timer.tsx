import { useState, useEffect } from "react";

import { TimerStatusType, TimerClockType } from "../../utils/types";

import "./Timer.css";

interface TimerProps {
  time: number;
  status: any;
  handleTimer: any;
};

const Timer = ({ time, status, handleTimer }: TimerProps) => {
  const [clock, setClock] = useState<TimerClockType>({
    time,
    seconds: time - Math.floor((time - 1) / 60) * 60 - 1,
    minuts: Math.floor((time - 1) / 60)
  });

  const [message, setMessage] = useState<string>("");

  const className = `timer timer--${status}`;

  const textContent: any = {
    active: `${clock?.minuts}:${clock?.seconds <= 10 ? `0${clock?.seconds}` : clock?.seconds} segundos`,
    done: "¡Se terminó el tiempo de espera!",
    error: "¡El código de verificación es incorrecto!",
    success: "¡Código correcto!"
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
      setMessage(textContent["done"]);
      handleTimer(true);
    } else {
      setMessage(textContent[status]);
    };
  }, [clock?.time, handleTimer]);

  return (
    <p
      className={className}
    >
      {message}
    </p>
  );
};

export default Timer;
