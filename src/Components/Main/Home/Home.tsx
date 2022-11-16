import League from '../League/League';
import LiveSection from '../LiveSection/LiveSection';
import './Home.css';
import WelcomeComponent from './WelcomeComponent/WelcomeComponent';

function Home() {
    // API call
    // let leauges = [`Israel's League`, 'La Liga', 'Premier League ', 'BundesLiga', 'Siries A', 'Champions League', 'World Cup']

    return (
        <div className='Home'>
            <div className='LiveSectionDiv'>
                <WelcomeComponent/>
                <LiveSection />
            </div>
        </div>
    )
}

export default Home;