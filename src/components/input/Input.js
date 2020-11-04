import React from "react";
import { connect } from "react-redux";

const Input = ({ success }) => {
  const contents = success ? null : (
    <form form='form-inline'>
      <input
        data-test='input-box'
        className='mb-2 mx-sm-3'
        type='text'
        placeholder='enter guess'
      />
      <button
        data-test='submit-button'
        type='submit'
        className='btn btn-primary'
      >
        Submit
      </button>
    </form>
  );

  return <div data-test='component-input'> {contents}</div>;
};

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
