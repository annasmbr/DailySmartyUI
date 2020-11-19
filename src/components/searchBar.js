import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

import { withRouter } from 'react-router-dom';

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        this.props.onSubmit(query);
        //console.log('trying to handle submit for query', query);
        //navigate to a new route
        //this.props.history.push('/results');
    }

    renderInput(field) {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />
    }

    render() {

      const { handleSubmit } = this.props;   
       
      return (
           // <form>
              // <input placeholder="Search DailySmarty"/>
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <div className="search-bar__wrapper">
                    <Field name="query" component={this.renderInput}/>
                    <p>Press return to search</p>
                </div>
            </form>
        )
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;

//<Field name="query" component={this.renderInput}/>