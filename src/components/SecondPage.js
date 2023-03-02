import React from 'react';
import SpecialBook from './SpecialBook';
import BookDetails from './BookDetails';


const  SecondPage = ({book, colorid}) => {
	return (
		
		<div className="section-second">
			<SpecialBook  book={book} colorid={colorid}/>  	
		  	<BookDetails  book={book} />  
		</div>
	);
}

export default SecondPage;