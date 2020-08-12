import React from 'react';

const colors = ["#660f09", "#4f3307", "#4f4907", "#204f07", "#062a4d", "#070338", "#230338", "#47043f", "#5c043a", "#5e0320", "#540308"];

const Floor = (x) => {
	return Math.floor(x);
}


const SpecialBook = ({book, colorid}) =>{

	const {name, isbn, authors} = book;

	return(
		
		<div className="section-second__book" style={{backgroundColor:`${colors[Floor(colorid % colors.length)]}`}}>
			<h2>{name}</h2>
			<h4>-- {authors[0]}</h4>
			<h5>isbn No: {isbn}</h5>
		</div>
			
	);

}

export default SpecialBook;