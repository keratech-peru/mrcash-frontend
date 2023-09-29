import { useState } from "react";

import "./Timer.css";

interface TimerProps {
  time: number;
};

const Timer = ({ time }: TimerProps) => {
  const initialMinutes = ~~(time / 60);
  const initialSeconds = time - 60 * initialMinutes;

  const [minutes, setMinutes] = useState<number>(initialMinutes);
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  return (
    <p className="timer">{minutes}:{seconds} segundos</p>
  );
};

export default Timer;
