import React from 'react';
import {Link} from 'react-router-dom';

const Book = ({item, index, color}) =>{

	const {name, isbn, authors} = item;

	return(
		<Link  to={`/books-${index}`} style={{textDecoration:'none'}}>
			<div className="book" style={{backgroundColor: `${color}`}}>
				<h2>{name}</h2>
				<h4>-- {authors[0]}</h4>
				<h5>isbn No: {isbn}</h5>
			</div>
		</Link>	
	);

}

export default Book;