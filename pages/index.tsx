import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header'));
const Professions = dynamic(() => import('../components/Professions'));
const Materials = dynamic(() => import('../components/Materials'));
const Lessons = dynamic(() => import('../components/Lessons'));
// const Introduce = dynamic(() => import('../components/Introduce'));
// const Achievements = dynamic(() => import('../components/Achievements'));
// const Students = dynamic(() => import('../components/Students'));
const TwoWays = dynamic(() => import('../components/TwoWays'));
const Tarifs = dynamic(() => import('../components/Tarifs'));
const Results = dynamic(() => import('../components/Results'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
    return (
        <>
            <Header />
            <Professions />
            <Materials />
            <Lessons />
            <TwoWays />
            <div id='tarifs' />
            <Tarifs />
            <Results />
            <Footer />
        </>
    );
}

{
    /* <div id='me' />
            <Introduce />
             <Achievements /> <Students />*/
}
