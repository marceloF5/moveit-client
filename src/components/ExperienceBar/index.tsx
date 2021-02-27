import { useChallenges } from "contexts/Challenges";

import { Container, CurrentExperience } from "./styles";

const ExperienceBar = () => {
    const { currentExperience, experienceToNextLevel } = useChallenges();

    const percentToNextLevel =
        Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <Container>
            <span>0 XP</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} XP
                </CurrentExperience>
            </div>
            <span>{experienceToNextLevel} XP</span>
        </Container>
    );
};

export default ExperienceBar;
