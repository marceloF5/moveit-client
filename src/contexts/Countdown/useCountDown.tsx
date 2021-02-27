import { useContext } from "react";
import CountdownContext from "./CountdownContext";

export const useCountDown = () => useContext(CountdownContext);
