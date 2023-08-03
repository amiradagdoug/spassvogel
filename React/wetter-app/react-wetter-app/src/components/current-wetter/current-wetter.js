import "./current-wetter.css"



const CurrentWetter = () => {

    return (<div className="wetter" > <div className="top" >
        <p className="city">Monastir</p>
        <p className="Wetter-Beschreibung">Sonnig</p>
    </div>
        <div className="bottom">
            <p className="Grad">18c</p>
        </div>
    </div>
    );

};



export default CurrentWetter;