import { createContext } from "react";

export interface IChallenge {
    type: "body" | "eye";
    description: string;
    amount: number;
}

export interface IChallengesContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: IChallenge;
    levelUp: () => void;
    closeLevelUpModal: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

const ChallengesContext = createContext({} as IChallengesContextData);

export default ChallengesContext;
