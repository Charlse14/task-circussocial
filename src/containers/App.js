import React from 'react';
import BooksContainer from '../components/BooksContainer';  
import SecondPage from '../components/SecondPage'
import SearchBox from '../components/SearchBox';
import {Route} from 'react-router-dom';
import {  connect } from 'react-redux';

import { setSearchField, requestBooks } from '../redux/actions';




const mapStateToProps = state => {
  return {
    searchField : state.searchBooks.searchField,
    books: state.requestBooks.books,
    isPending: state.requestBooks.isPending,
    error: state.requestBooks.error
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
    onRequestBooks: () => dispatch(requestBooks())
  }
}


class  App extends React.Component{


  componentDidMount(){
    this.props.onRequestBooks();   // for requesting data from the api
  }


  render(){

    const {searchField, onSearchChange, books, isPending} = this.props;

    const filteredBooks = books.filter(book => {
      return book.name.toLowerCase().includes(searchField.toLowerCase()); 
    })

    return (
      <div className="App">

        <h1 className="main-heading">Favorite Books and Hidden Characters</h1>


        <Route exact path = '/' render={()=>(
          <div className="search-box-container">

            <SearchBox className="search-box" searchChange={onSearchChange}/>

            {
              isPending
              ? <h2 className="Loding-heading">Loading....</h2>
              :(
                filteredBooks.length === 0
                ? <h2 className="Loding-heading">Not Found, Search Again...</h2>
                : <BooksContainer bookList={filteredBooks}/>
              )
            }
            
          </div>
        )}/>



        <Route path ='/:item' render={(item)=>(
          <div>

            { 

              books.length === 0
              ? <h2 className="Loding-heading">Loding.......</h2>
              : <SecondPage book={books[Number(item.match.params.item[6])]} colorid={Number(item.match.params.item[6])}/>
              
            }
          
          </div>
        )}/>

        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*

Number(item.match.params.item[6]) --> return nummeric value of every routes when user clicks on a specific book

*/