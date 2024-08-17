import Header from '../components/Header';
import Professions from '../components/Professions';
import Materials from '../components/Materials';
import Lessons from '../components/Lessons';
import Footer from '../components/Footer';
import Results from '../components/Results';
import Tarifs from '../components/Tarifs';
import Introduce from '../components/Introduce';

export default function Home() {
    return (
        <>
            <Header />
            <Professions />
            <Materials />
            <Lessons />
            <Introduce />
            <Tarifs />
            <Results />
            <Footer />
        </>
    );
}
