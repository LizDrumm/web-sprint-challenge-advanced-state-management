import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

function SmurfList(props) {
    return(
        <div>
            {props.smurfs.map((smurf) => {
                return <Smurf key={smurf.id} smurf={smurf} />
            })}
        </div>
    );
}

function mapStateToProps(state){
    return{
        smurfs: state.smurfs,
    };
}

export default connect(mapStateToProps, {})(SmurfList);