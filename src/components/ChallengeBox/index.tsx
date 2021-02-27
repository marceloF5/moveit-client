import { useChallenges } from "contexts/Challenges";
import { useCountDown } from "contexts/Countdown";

import {
    Container,
    ChallengeNotActive,
    ChallengeActive,
    ChallengeButton,
} from "./styles";

const ChallengeBox = () => {
    const {
        activeChallenge,
        resetChallenge,
        completeChallenge,
    } = useChallenges();
    const { resetCountdown } = useCountDown();

    function handleChallengeSecceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <Container>
            {activeChallenge ? (
                <ChallengeActive>
                    <header>Ganhe {activeChallenge.amount} XP</header>

                    <main>
                        <img
                            src={`icons/${activeChallenge.type}.svg`}
                            alt="Ganhe XP"
                        />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <ChallengeButton
                            onClick={handleChallengeFailed}
                            result={"failed"}
                        >
                            Falhei
                        </ChallengeButton>
                        <ChallengeButton
                            onClick={handleChallengeSecceeded}
                            result={"succeeded"}
                        >
                            Completei
                        </ChallengeButton>
                    </footer>
                </ChallengeActive>
            ) : (
                <ChallengeNotActive>
                    <strong>Finalize um ciclo para receber desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando os desafios.
                    </p>
                </ChallengeNotActive>
            )}
        </Container>
    );
};

export default ChallengeBox;
