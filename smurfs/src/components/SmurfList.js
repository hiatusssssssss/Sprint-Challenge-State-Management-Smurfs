import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/actions";
import { Smurfs } from "./Smurfs";
import { SmurfForm } from "./SmurfForm";

const SmurfList = (props) => {
  useEffect(() => {
    props.getSmurf();
  }, []);

  console.log(props.smurfs);

  return (
    <div>
      <SmurfForm />
      {props.smurfs.map((item) => (
        <Smurfs data={item} key={item.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { getSmurf })(SmurfList);
