import React from "react";

class SearchBar extends React.Component {
  state = { search: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.search);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Search video..."
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
