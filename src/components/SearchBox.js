import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return(
		<div className="search-box">
			<input 
				type="search"
				placeholder="Serch books"
				onChange={searchChange}
			/>	
		</div>
	);
}

export default SearchBox;