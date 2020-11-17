import axios from "axios";

import { getLetterMatchCount } from "../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD"
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessWord
 * @returns { function} - Redux Thunk function
 */
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

export const getSecretWord = () => {
  const options = {
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words/",
    params: { random: "true" },
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
    }
  };
  return (dispatch) => {
    axios
      .request(options)
      .then(function (response) {
        const word = response.data.word.split(" ");
        console.log(response.data);
        console.log(word[0]);
        dispatch({
          type: actionTypes.SET_SECRET_WORD,
          payload: word[0]
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
};
