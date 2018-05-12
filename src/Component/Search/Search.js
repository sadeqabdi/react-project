import React, {Component} from  'react';
import './Search.css';

class Search extends Component {
    render() {
        return(
            <div id="search-id">
              <input type="search" placeholder="search here" className="Header-search"></input>
            </div>
        );
    }
}
export default Search;