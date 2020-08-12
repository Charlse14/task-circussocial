import React from 'react';
import Book from '../components/Book';


const colors = ["#660f09", "#4f3307", "#4f4907", "#204f07", "#062a4d", "#070338", "#230338", "#47043f", "#5c043a", "#5e0320", "#540308"];


const Floor = (x) => {
	return Math.floor(x);
}


const BooksContainer = ({bookList}) => {

	return (

		<div className="section-home">

			{   
				bookList.map((item, index) => {
					return <Book item={item} key={index} index={index} color={colors[Floor(index % colors.length)]}/>
				})
			}       	
		  	
		</div>
	);

}

export default BooksContainer;