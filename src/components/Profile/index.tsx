import { useChallenges } from "contexts/Challenges";

import { Container } from "./styles";

const Profile = () => {
    const { level } = useChallenges();

    return (
        <Container>
            <img
                src="https://github.com/marcelof5.png"
                alt="Marcelo Fortunato Profile"
            />

            <div>
                <strong>Marcelo Fortunato</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </Container>
    );
};

export default Profile;
