import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header'));
const Professions = dynamic(() => import('../components/Professions'));
const Materials = dynamic(() => import('../components/Materials'));
const Lessons = dynamic(() => import('../components/Lessons'));
const Introduce = dynamic(() => import('../components/Introduce'));
const Footer = dynamic(() => import('../components/Footer'));
const Results = dynamic(() => import('../components/Results'));
const Tarifs = dynamic(() => import('../components/Tarifs'));
const Achievements = dynamic(() => import('../components/Achievements'));
const TwoWays = dynamic(() => import('../components/TwoWays'));
const Students = dynamic(() => import('../components/Students'));

export default function Home() {
    return (
        <>
            <Header />
            <Professions />
            <Materials />
            <Lessons />
            <Introduce />
            <Achievements />
            <TwoWays />
            <Students />
            <Tarifs />
            <Results />
            <Footer />
        </>
    );
}
