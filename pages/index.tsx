import Header from '../components/Header';
import Professions from '../components/Professions';
import Materials from '../components/Materials';
import Lessons from '../components/Lessons';
import Footer from '../components/Footer';
import Results from '../components/Results';

export default function Home() {
    return (
        <>
            <Header />
            <Professions />
            <Materials />
            <Lessons />
            <Results />
            <Footer />
        </>
    );
}
