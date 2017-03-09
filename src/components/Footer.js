import React, {Component} from 'react'

export default class Footer extends Component {
  renderFilter(filter, name) {
    if(filter == this.props.filter) {
      return name;
    }
    return (
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          this.props.onFilterChange(filter);
        }}>
        {name}
      </a>
    );
  }

  render() {
    return (
      <p>
        SHOW
        {' '}
        {this.renderFilter('SHOW_ALL', 'All')}
        {', '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {', '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
        .
      </p>
    );
  }
}
