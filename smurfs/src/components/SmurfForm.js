import React, { useState } from 'react';
import { postSmurfs } from '../store/actions';
import { connect } from 'react-redux';

const initialFormValues = {
    name: '',
    age: '',
    height: '',
}

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState(initialFormValues);
    const { postSmurfs } = props;
    
    const onSubmit = evt => {
        evt.preventDefault()
        postSmurfs(newSmurf)
        setNewSmurf(initialFormValues)
    }


    const onInputChange = evt => {
       setNewSmurf({
           ...newSmurf,
           [evt.target.name]: evt.target.value
       })
    };

    return(
    <>
        <form className="formContainer" onSubmit={onSubmit}>
            <h3>Add a Smurf to Your Village</h3>
            <div className="formInputs">
                <label>Smurf Name&nbsp;
                    <input
                        value={newSmurf.name}
                        name='name'
                        type='text'
                        onChange={onInputChange}
                    />
                </label>
                <br/>

                <label>Smurf Age&nbsp;
                    <input
                
                        value={newSmurf.age}
                        name='age'
                        type='text'
                        onChange={onInputChange}
                    />
                </label>
                <br/>

                <label>Smurf Height&nbsp;
                    <input
                       
                        value={newSmurf.height}
                        name='height'
                        type='text'
                        onChange={onInputChange}
                    />
                </label>
                <br/>
            </div>
            <button>Add Smurf</button>
        </form>
    </>
    )
}


function mapStateToProps(state){
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { postSmurfs })(SmurfForm);