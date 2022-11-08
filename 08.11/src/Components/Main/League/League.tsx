import './League.css';

export interface LeagueProps{
    name:string
    onclick?:()=>void,
}

function League ({ onclick, name }:LeagueProps){
    return(
        <div className='League'>
            <div onClick={onclick}>
                <p>{name}</p>
            </div>
        </div>
    )
}


export default League;