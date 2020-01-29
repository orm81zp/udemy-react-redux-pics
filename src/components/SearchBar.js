import React from 'react';

class SearchBar extends React.Component{
  onInputChange(event) {

  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label>Image Search</label>
          <input className="field" type="text" onChange={this.onInputChange}/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
