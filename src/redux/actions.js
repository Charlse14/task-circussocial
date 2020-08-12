import {
	CHANGE_SEARCH_FIELD,
	REQUEST_BOOKS_PENDING,
	REQUEST_BOOKS_SUCCESS,
	REQUEST_BOOKS_FAILED
} from './constants.js';   /* this file is specifying all action types */




// Function for the search bar 

export const setSearchField = (text) => ({
	type : CHANGE_SEARCH_FIELD,
	payload: text
})



// Function that retrieve data from api

export const requestBooks = () => (dispatch) => {
	dispatch({type : REQUEST_BOOKS_PENDING});
	fetch("https://www.anapioficeandfire.com/api/books")
      .then(res => res.json())
      .then(data=> dispatch({ type: REQUEST_BOOKS_SUCCESS, payload : data }))
      .catch(error => dispatch({ type: REQUEST_BOOKS_FAILED, payload : error }))
}