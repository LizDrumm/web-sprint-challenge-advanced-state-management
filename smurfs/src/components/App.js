import React, { Component,useEffect, useState  } from "react";
import "./App.css";

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm'

import { fetchSmurfs } from '../store/actions';
import { connect } from 'react-redux';

const App = (props) =>{

  const { fetchSmurfs, loadingSmurfs, errorMessage} = props;

  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  //render() {
    return (
      <div className="App">
        <h1>SMURFS!🍄</h1>
        

        <div className="loadingDiv">
          {!loadingSmurfs ? ( <SmurfList /> ) : (<div>Finding Smurfs...</div>)}
         </div>
        <div className = "form">
          <SmurfForm/>
        </div>

   {errorMessage !== "" ? <div>{errorMessage}</div> : null}
  
      </div>
    );
  }



function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage,
  };
}

export default connect(mapStateToProps, { fetchSmurfs })(App);