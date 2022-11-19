import './League.css';

export interface LeagueProps{
    name:string
    onclick?:()=>void, 
    image?: string
    // loader?: ()=>void;
}

function League ({ onclick, name, image }:LeagueProps){
    return(
        <div className='League'>
            <div className='league-name-logo'  onClick={onclick}>
                <img className='coutnry-league-flag' src={image} alt="" />
                <p>{name}</p>
            </div>
        </div>
    )
}


export default League;