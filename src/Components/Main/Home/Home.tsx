import { red } from '@mui/material/colors';
import { useRef } from 'react';
import League from '../League/League';
import LiveSection from '../LiveSection/LiveSection';
import './Home.css';
import WelcomeComponent from './WelcomeComponent/WelcomeComponent';


function Home() {
    // window.addEventListener('scroll', () => handleClick);
    // window.addEventListener('scroll', () => handleClick, { passive: true });

    // const ref = useRef< null | HTMLDivElement>(null);

    // const handleScroll: any = () => {
        // if(ref.current){

            // ref.current?.scrollIntoView({behavior: 'smooth'});
        // }
            // console.log('Scroll event ocurred ...');
    // };
  
    // API call
    // let leauges = [`Israel's League`, 'La Liga', 'Premier League ', 'BundesLiga', 'Siries A', 'Champions League', 'World Cup']

    return (
        <div  className='Home'  >
                <WelcomeComponent />
            <div className='LiveSectionDiv'>
            {/* <div id='scrolling'onScroll={handleScroll}>Scroll to element</div> */}

                {/* <div ref={ref}>Some content here</div> */}
                <LiveSection />
            </div>
        </div>
    )
}

export default Home;