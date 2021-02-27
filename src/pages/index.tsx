import { GetServerSideProps } from "next";
import ChallengesProvider from "contexts/Challenges";
import HomePage from "templates/Home";

interface IHomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

const Home = ({
    level,
    currentExperience,
    challengesCompleted,
}: IHomeProps) => (
    <ChallengesProvider
        level={level}
        currentExperience={currentExperience}
        challengesCompleted={challengesCompleted}
    >
        <HomePage />
    </ChallengesProvider>
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted),
        },
    };
};

export default Home;
