import React from 'react';


const BookDetails = ({book}) =>{

	const {numberOfPages, publisher, country, mediaType, released, characters} = book;

	return(
		
		<div className="section-second__details">
			<h2>More details...</h2>
			<h3>It contains <strong>{numberOfPages}</strong> pages</h3>
			<h3>publisher : {publisher}</h3>
			<h3>country : {country}</h3>
			<h3>mediaType : {mediaType}</h3>
			<h3>released : {released}</h3>
			<h3>hidden characters # <strong>{characters.length}</strong></h3>
		</div>
			
	);

}

export default BookDetails;
