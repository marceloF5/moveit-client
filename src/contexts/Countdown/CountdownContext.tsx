import { createContext } from "react";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    isActive: boolean;
    hasFinished: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

const CountdownContext = createContext({} as CountdownContextData);

export default CountdownContext;
