import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class Booklist extends Component {

    renderList() {

        return this.props.book.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item ">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        //console.log(this.props.asbf) ->'123'
        return (
            <ul className="list-group col-sm-4  ">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //Whatever is returned will show up as props
    //inside of Booklist
    return {
        book: state.books
        //asbf:'123'
    };
}
//Anything retured from this function will end up as props
//on the Booklist container
function mapDispatchToProps(dispatch) {
    //Whenenver selectBook is called, the result should be passed
    //to all of our reducres
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//promote booklist from a component to a container- it needs to know
//about this new dispatch mathod, selectBook. Make it available
//as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);