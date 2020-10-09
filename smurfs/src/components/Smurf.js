import React from 'react';

function Smurf(props) {
    const { smurf } = props;

    return(
        <div className="smurfCard">
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
        </div>
    )
}

export default Smurf;