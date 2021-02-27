import { useContext } from "react";
import ChallengesContext from "./ChallengesContext";

export const useChallenges = () => useContext(ChallengesContext);
