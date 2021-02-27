import { useChallenges } from "contexts/Challenges";

import { Container } from "./styles";

const CompletedCahallenges = () => {
    const { challengesCompleted } = useChallenges();

    return (
        <Container>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </Container>
    );
};

export default CompletedCahallenges;
