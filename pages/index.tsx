import Header from '../components/Header';
import Professions from '../components/Professions';
import Materials from '../components/Materials';
import Lessons from '../components/Lessons';
import Introduce from '../components/Introduce';
import Footer from '../components/Footer';
import Results from '../components/Results';
import Tarifs from '../components/Tarifs';
import Achievements from '../components/Achievements';
import TwoWays from '../components/TwoWays';
import Students from '../components/Students';

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
