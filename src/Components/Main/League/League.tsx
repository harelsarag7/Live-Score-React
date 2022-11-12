import './League.css';

export interface LeagueProps{
    name:string
    onclick?:()=>void, 
    loader?: ()=>void;
}

function League ({ onclick, loader, name }:LeagueProps){
    return(
        <div className='League'>
            <div className='leagueName' onMouseUp={loader} onClick={onclick}>
                <p>{name}</p>
            </div>
        </div>
    )
}


export default League;