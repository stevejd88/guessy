import React from "react";
import { connect } from "react-redux";
import "./App.css";

import { getSecretWord } from "../src/actions";
import GuessedWords from "./components/guessedWords/GuessedWords";
import Congrats from "./components/congrats/Congrats";
import Input from "./components/input/Input";

function App({ success, secretWord, guessedWords, getSecretWord }) {
  return (
    <div className='container'>
      <h1>Guessy</h1>
      <Congrats success={success} />
      <Input />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { success, secretWord, guessedWords } = state;
  return { success, secretWord, guessedWords };
};

export default connect(mapStateToProps, { getSecretWord })(App);
